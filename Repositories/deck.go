package repositories

import (
	"fmt"
	models "uma/api/Models"

	"gorm.io/gorm"
)

type DeckRepositories interface {
	AddUserDeck(id int, deckNumb int, deck models.Deck)
	GetAllUserDeck(id int) models.User
	GetUserDeck(id int, deck int) models.UserDeckNumb
}

type deckRepositories struct {
	db *gorm.DB
}

func NewDeckRepository(db *gorm.DB) *deckRepositories {
	return &deckRepositories{db}
}

func (d *deckRepositories) AddUserDeck(id int, deckNumb int, deck models.Deck) {
	strDeckNumb := fmt.Sprintf("deck%d", deckNumb)
	d.db.Model(&models.User{}).Where("id = ?", id).Update(strDeckNumb, deck)
}

func (d *deckRepositories) GetAllUserDeck(id int) models.User {
	var userDeck models.User
	d.db.Model(&models.User{}).Where("id = ?", id).Scan(&userDeck)
	return userDeck
}

func (d *deckRepositories) GetUserDeck(id int, deck int) models.UserDeckNumb {
	var userDeck models.UserDeckNumb
	d.db.Model(&models.User{}).Select(fmt.Sprintf("id, deck%d as deck", deck)).Where("id = ?", id).Scan(&userDeck)
	fmt.Println(userDeck)
	return userDeck
}
