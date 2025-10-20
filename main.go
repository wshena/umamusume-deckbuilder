package main

import (
	"fmt"
	"log"
	"net/http"
	"os"

	handlers "uma/api/Handlers"
	middleware "uma/api/Middleware"
	models "uma/api/Models"
	repositories "uma/api/Repositories"
	services "uma/api/Services"

	"github.com/joho/godotenv"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

func ReadEnv() string {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	return fmt.Sprintf("host=%s user=%s password=%s dbname=%s", os.Getenv("DB_Host"), os.Getenv("DB_User"), os.Getenv("DB_Password"), os.Getenv("DB_Name"))
}

func ConnectDB() *gorm.DB {
	dsn := ReadEnv()
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatalf("Error, tidak dapat menghubungkan ke databases")
	}
	return db
}

func main() {
	db := ConnectDB()

	db.AutoMigrate(&models.Effect{}, &models.SupportsCard{}, &models.SupportsCardEffect{}, &models.Skill{}, &models.CardsSkill{}, &models.User{}, models.UsersCard{})

	cardRepository := repositories.NewCardRepository(db)
	cardServices := services.NewCardsServices(cardRepository)
	cardHandler := handlers.NewCardsHandler(cardServices)

	invRepository := repositories.NewInventoryRepository(db)
	invService := services.NewInventoryService(invRepository)
	invHandler := handlers.NewInventoryHandler(invService)

	deckRespository := repositories.NewDeckRepository(db)
	deckService := services.NewDeckServices(deckRespository)
	deckHandler := handlers.NewDeckHandler(deckService)

	userRepository := repositories.NewUserRepository(db)
	userServices := services.NewUserServices(userRepository)
	userHandler := handlers.NewUserHandler(userServices)

	mux := http.NewServeMux()
	mux.HandleFunc("GET /api/support", cardHandler.GetSupportCards)
	mux.HandleFunc("GET /api/support/{id}", cardHandler.GetSupportCardsById)
	mux.HandleFunc("GET /api/inventory/{user_id}", invHandler.GetUserCard)
	mux.HandleFunc("GET /api/decks/{user_id}", deckHandler.GetAllUserDeck)
	mux.HandleFunc("GET /api/decks/{user_id}/{deck_number}", deckHandler.GetUserDeck)

	mux.Handle("POST /api/inventory/{user_id}/{card_id}", middleware.AuthUser(http.HandlerFunc(invHandler.AddUserCard)))
	mux.Handle("POST /api/decks/{user_id}/{deck_number}", middleware.AuthUser(http.HandlerFunc(deckHandler.AddUserDeck)))
	mux.HandleFunc("POST /api/signin", userHandler.SignIn)
	mux.HandleFunc("POST /api/login", userHandler.Login)
	mux.Handle("POST /api/logout", middleware.AuthUser(http.HandlerFunc(userHandler.Logout)))

	println("run in port :8080")
	http.ListenAndServe(":8080", mux)
}
