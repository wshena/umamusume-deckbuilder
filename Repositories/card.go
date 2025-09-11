package repositories

import (
	models "uma/api/Models"

	"gorm.io/gorm"
)

type CardsRepository interface {
	GetSupportCards() []models.SupportsCardDetails
	GetSupportCardsById(id int) models.SupportsCardDetails
}

type cardsRepository struct {
	db *gorm.DB
}

func NewCardRepository(db *gorm.DB) *cardsRepository {
	return &cardsRepository{db}
}

func (r *cardsRepository) GetSupportCards() []models.SupportsCardDetails {
	data := make([]models.SupportsCardDetails, 0)
	r.db.Model(&models.SupportsCard{}).Select("supports_cards.id, supports_cards.name, img, full_title, type, rarity, effects1.name as Unique_Effect1, effects1.description as Unique_Effect1_Desc, unique_effect1_value, effects2.name as Unique_Effect2, effects2.description as Unique_Effect2_Desc, unique_effect2_value").Joins("JOIN effects AS effects1 ON effects1.id = supports_cards.unique_effect1_id").Joins("JOIN effects AS effects2 ON effects2.id = supports_cards.unique_effect2_id").Order("rarity").Order("type").Scan(&data)
	return data
}

func (r *cardsRepository) GetSupportCardsById(id int) models.SupportsCardDetails {
	var data models.SupportsCardDetails
	r.db.Model(&models.SupportsCard{}).Select("supports_cards.id, supports_cards.name, img, full_title, type, rarity, effects1.name as Unique_Effect1, effects1.description as Unique_Effect1_Desc, unique_effect1_value, effects2.name as Unique_Effect2, effects2.description as Unique_Effect2_Desc, unique_effect2_value").Joins("JOIN effects AS effects1 ON effects1.id = supports_cards.unique_effect1_id").Joins("JOIN effects AS effects2 ON effects2.id = supports_cards.unique_effect2_id").Where("supports_cards.id = ?", id).First(&data)
	return data
}
