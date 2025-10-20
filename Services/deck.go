package services

import (
	models "uma/api/Models"
	repositories "uma/api/Repositories"
)

type DeckServices interface {
	AddUserDeck(id int, deckNumb int, deck models.Deck)
	GetAllUserDeck(id int) models.User
	GetUserDeck(id int, deck int) models.UserDeckNumb
}

type deckServices struct {
	deckRepositories repositories.DeckRepositories
}

func NewDeckServices(deckRepositories repositories.DeckRepositories) DeckServices {
	return &deckServices{deckRepositories}
}

func (d *deckServices) AddUserDeck(id int, deckNumb int, deck models.Deck) {
	d.deckRepositories.AddUserDeck(id, deckNumb, deck)
}

func (d *deckServices) GetAllUserDeck(id int) models.User {
	return d.deckRepositories.GetAllUserDeck(id)
}

func (d *deckServices) GetUserDeck(id int, deck int) models.UserDeckNumb {
	return d.deckRepositories.GetUserDeck(id, deck)
}
