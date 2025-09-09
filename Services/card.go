package services

import (
	models "uma/api/Models"
	repositories "uma/api/Repositories"
)

type CardsServices interface {
	GetSupportCards() []models.SupportsCardDetails
}

type cardsServices struct {
	cardsRepository repositories.CardsRepository
}

func NewCardsServices(cardsRepository repositories.CardsRepository) CardsServices {
	return &cardsServices{cardsRepository}
}

func (s *cardsServices) GetSupportCards() []models.SupportsCardDetails {
	return s.cardsRepository.GetSupportCards()
}
