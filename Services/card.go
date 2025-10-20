package services

import (
	models "uma/api/Models"
	repositories "uma/api/Repositories"
)

type CardsServices interface {
	GetSupportCards() []models.Rarity
	GetSupportCardsById(id int) models.SupportsCardDetails
	GetSupportCardsByFilter(rarity string, types string, name string, skills int, effect int, order string) []models.SupportsCardDetails
}

type cardsServices struct {
	cardsRepository repositories.CardsRepository
}

func NewCardsServices(cardsRepository repositories.CardsRepository) CardsServices {
	return &cardsServices{cardsRepository}
}

func (s *cardsServices) GetSupportCards() []models.Rarity {
	var allCards []models.Rarity
	//TODO: ganti ke dinamic ???
	listRarity := []string{"SSR", "SR", "R"}
	listType := []string{"Speed", "Stamina", "Power"}
	cards := s.cardsRepository.GetSupportCards()
	for _, rarity := range listRarity {
		var cardRarity models.Rarity
		cardRarity.Rarity = rarity
		for _, types := range listType {
			var cardType models.Type
			cardType.Type = types
			for _, card := range cards {
				if card.Type == types && card.Rarity == rarity {
					var cardDetails models.Cards
					cardDetails.ID = card.ID
					cardDetails.Name = card.Name
					cardDetails.Img = card.Img
					cardDetails.FullTitle = card.FullTitle
					cardDetails.UniqueEffect1 = card.UniqueEffect1
					cardDetails.UniqueEffect1Desc = card.UniqueEffect1Desc
					cardDetails.UniqueEffect1Value = card.UniqueEffect1Value
					cardDetails.UniqueEffect2 = card.UniqueEffect2
					cardDetails.UniqueEffect2Desc = card.UniqueEffect2Desc
					cardDetails.UniqueEffect2Value = card.UniqueEffect2Value
					cardType.Cards = append(cardType.Cards, cardDetails)
				}
			}
			cardRarity.Type = append(cardRarity.Type, cardType)
		}
		allCards = append(allCards, cardRarity)
	}
	return allCards
}

func (s *cardsServices) GetSupportCardsById(id int) models.SupportsCardDetails {
	cards, effects, skills := s.cardsRepository.GetSupportCardsById(id)

	var cardsDetails models.SupportsCardDetails = cards
	cardsDetails.SupportsCardEffectDetail = effects
	cardsDetails.CardsSkillsDetail = skills

	return cardsDetails
}

func (s *cardsServices) GetSupportCardsByFilter(rarity string, types string, name string, skills int, effect int, order string) []models.SupportsCardDetails {
	return s.cardsRepository.GetSupportCardsByFilter(rarity, types, name, skills, effect, order)
}
