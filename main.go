package main

import (
	"fmt"
	"log"
	"net/http"
	"os"

	handlers "uma/api/Handlers"
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

	db.AutoMigrate(&models.Effect{}, &models.SupportsCard{}, &models.SupportsCardEffect{}, &models.Skill{}, &models.CardsSkill{})

	cardRepository := repositories.NewCardRepository(db)
	cardServices := services.NewCardsServices(cardRepository)
	cardHandler := handlers.NewCardsHandler(cardServices)

	mux := http.NewServeMux()
	mux.HandleFunc("GET /api/", cardHandler.LandingPage)
	mux.HandleFunc("GET /api/support", cardHandler.GetSupportCards)
	mux.HandleFunc("GET /api/support/{id}", cardHandler.GetSupportCardsById)

	print("run in port :8080")
	http.ListenAndServe(":8080", mux)
}
