package repositories

import (
	models "uma/api/Models"

	"gorm.io/gorm"
)

type CardsRepository interface {
	GetSupportCards() []models.SupportsCardDetails
	GetSupportCardsById(id int) (models.SupportsCardDetails, []models.SupportsCardEffectDetails, []models.CardsSkillsDetails)
	GetSupportCardsByFilter(rarity string, types string, name string, skills int, effect int, order string) []models.SupportsCardDetails
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

func (r *cardsRepository) GetSupportCardsById(id int) (models.SupportsCardDetails, []models.SupportsCardEffectDetails, []models.CardsSkillsDetails) {
	var card models.SupportsCardDetails
	var effect = make([]models.SupportsCardEffectDetails, 0)
	var skill = make([]models.CardsSkillsDetails, 0)
	r.db.Model(&models.SupportsCardEffect{}).Select("supports_card_effects.id, effects.name as Effect_Name, effects.description as Effect_Desc, duplicate0, duplicate1, duplicate2, duplicate3, duplicate4").Joins("JOIN supports_cards ON supports_cards.id = supports_card_effects.supports_card_id").Joins("JOIN effects ON effects.id = supports_card_effects.effect_id").Where("supports_card_id = ?", id).Scan(&effect)
	r.db.Model(&models.CardsSkill{}).Select("cards_skills.id, skills.name as Skill_Name, skills.description as Skill_Desc").Joins("JOIN skills ON skills.id = cards_skills.skill_id").Joins("JOIN supports_cards ON supports_cards.id = cards_skills.supports_card_id").Where("cards_skills.supports_card_id = ?", id).Scan(&skill)
	r.db.Model(&models.SupportsCard{}).Select("supports_cards.id, supports_cards.name, img, full_title, type, rarity, effects1.name as Unique_Effect1, effects1.description as Unique_Effect1_Desc, unique_effect1_value, effects2.name as Unique_Effect2, effects2.description as Unique_Effect2_Desc, unique_effect2_value").Joins("JOIN effects AS effects1 ON effects1.id = supports_cards.unique_effect1_id").Joins("JOIN effects AS effects2 ON effects2.id = supports_cards.unique_effect2_id").Where("supports_cards.id = ?", id).First(&card)
	return card, effect, skill
}

func (r *cardsRepository) GetSupportCardsByFilter(rarity string, types string, name string, skills int, effect int, order string) []models.SupportsCardDetails {
	var ids []int
	var cards = make([]models.SupportsCardDetails, 0)
	query := r.db.Model(&models.SupportsCard{}).Select("supports_cards.id").Joins("JOIN effects AS effects1 ON effects1.id = supports_cards.unique_effect1_id").Joins("JOIN effects AS effects2 ON effects2.id = supports_cards.unique_effect2_id").Joins("JOIN cards_skills ON supports_cards.id = cards_skills.supports_card_id")
	if effect != 0 {
		query = query.Where("supports_card_effects.id = ?", effect)
	} else if name != "" {
		query = query.Where("supports_cards.name = ?", name)
	} else if types != "" {
		query = query.Where("supports_cards.type = ?", types)
	} else if rarity != "" {
		query = query.Where("supports_cards.rarity = ?", rarity)
	} else if skills != 0 {
		query = query.Where("cards_skills.id = ?", skills)
	}
	query.Scan(&ids)

	//Hilangkan duplikat
	var uniqueIds []int
	for _, id := range ids {
		unique := true
		for _, uId := range uniqueIds {
			if id == uId {
				unique = false
			}
		}
		if unique {
			uniqueIds = append(uniqueIds, id)
		}
	}

	for _, id := range uniqueIds {
		var card models.SupportsCardDetails
		r.db.Model(&models.SupportsCard{}).Select("supports_cards.id, supports_cards.name, img, full_title, type, rarity, effects1.name as Unique_Effect1, effects1.description as Unique_Effect1_Desc, unique_effect1_value, effects2.name as Unique_Effect2, effects2.description as Unique_Effect2_Desc, unique_effect2_value").Joins("JOIN effects AS effects1 ON effects1.id = supports_cards.unique_effect1_id").Joins("JOIN effects AS effects2 ON effects2.id = supports_cards.unique_effect2_id").Where("supports_cards.id = ?", id).Scan(&card)
		cards = append(cards, card)
	}

	return cards
}
