package models

import (
	"time"

	"gorm.io/datatypes"
	"gorm.io/gorm"
)

type Messages struct {
	Status  string `json:"status,omitempty"`
	Message string `json:"message"`
}

type Rarity struct {
	Rarity string `json:"rarity"`
	Type   []Type
}

type Type struct {
	Type  string `json:"type"`
	Cards []Cards
}

type Cards struct {
	ID                 uint   `json:"id"`
	Name               string `json:"name"`
	Img                string `json:"img"`
	FullTitle          string `json:"full_title"`
	UniqueEffect1      string `json:"unique_effect_1"`
	UniqueEffect1Desc  string `json:"unique_effect_1_desc"`
	UniqueEffect1Value int    `json:"unique_effect_1_value"`
	UniqueEffect2      string `json:"unique_effect_2"`
	UniqueEffect2Desc  string `json:"unique_effect_2_desc"`
	UniqueEffect2Value int    `json:"unique_effect_2_value"`
}

type SupportsCardDetails struct {
	ID                       uint                        `json:"id"`
	Name                     string                      `json:"name"`
	Img                      string                      `json:"img"`
	FullTitle                string                      `json:"full_title"`
	Type                     string                      `json:"type"`
	Rarity                   string                      `json:"rarity"`
	UniqueEffect1            string                      `json:"unique_effect_1"`
	UniqueEffect1Desc        string                      `json:"unique_effect_1_desc"`
	UniqueEffect1Value       int                         `json:"unique_effect_1_value"`
	UniqueEffect2            string                      `json:"unique_effect_2"`
	UniqueEffect2Desc        string                      `json:"unique_effect_2_desc"`
	UniqueEffect2Value       int                         `json:"unique_effect_2_value"`
	SupportsCardEffectDetail []SupportsCardEffectDetails `gorm:"-" json:"effects"`
	CardsSkillsDetail        []CardsSkillsDetails        `gorm:"-" json:"skills"`
}

type SupportsCardEffectDetails struct {
	ID         uint   `json:"id"`
	CardName   string `json:"card_name,omitempty"`
	EffectName string `json:"effect_name"`
	EffectDesc string `json:"effect_desc"`
	Duplicate0 int    `json:"duplicate_0"`
	Duplicate1 int    `json:"duplicate_1"`
	Duplicate2 int    `json:"duplicate_2"`
	Duplicate3 int    `json:"duplicate_3"`
	Duplicate4 int    `json:"duplicate_4"`
}

type CardsSkillsDetails struct {
	ID        uint   `json:"id"`
	CardName  string `json:"card_name,omitempty"`
	SkillName string `json:"skill_effect"`
	SkillDesc string `json:"skill_desc"`
}

type UserDeckNumb struct {
	ID   uint           `json:"id"`
	Deck datatypes.JSON `json:"deck"`
}

// ================================== Deck JSON ==================================

type Deck struct {
	DeckNumber int        `json:"deck_number"`
	DeckName   string     `json:"deck_name"`
	CreatedAt  time.Time  `json:"created_at"`
	UpdatedAt  time.Time  `json:"updated_at"`
	Cards      []DeckCard `json:"cards"`
}

type DeckCard struct {
	CardId    int    `json:"card_id"`
	Name      string `json:"name"`
	Image     string `json:"image"`
	Duplicate int    `json:"duplicate"`
}

// ================================== DB Schema ==================================

type SupportsCardEffect struct {
	gorm.Model
	SupportsCardId uint `json:"supports_card_id"`
	EffectId       uint `json:"effect_id"`
	Duplicate0     int  `json:"duplicate_0"`
	Duplicate1     int  `json:"duplicate_1"`
	Duplicate2     int  `json:"duplicate_2"`
	Duplicate3     int  `json:"duplicate_3"`
	Duplicate4     int  `json:"duplicate_4"`
}

type CardsSkill struct {
	gorm.Model
	SupportsCardId uint `json:"supports_card_id"`
	SkillId        uint `json:"skill_id"`
}

type SupportsCard struct {
	gorm.Model                               //<- sudah termasuk ID (primary_key)
	Name                string               `json:"name"`
	Img                 string               `json:"img"`
	FullTitle           string               `json:"full_title"`
	Type                string               `json:"type"`
	Rarity              string               `json:"rarity"`
	UniqueEffect1Id     uint                 `json:"unique_effect_1_id"`
	UniqueEffect1Value  int                  `json:"unique_effect_1_value"`
	UniqueEffect2Id     uint                 `json:"unique_effect_2_id"`
	UniqueEffect2Value  int                  `json:"unique_effect_2_value"`
	SupportsCardEffects []SupportsCardEffect `gorm:"foreignKey:SupportsCardId"`
	CardsSkills         []CardsSkill         `gorm:"foreignKey:SupportsCardId"`
	UserCards           []UsersCard          `gorm:"foreignKey:CardId"`
}

type Effect struct {
	gorm.Model
	Name                string               `json:"name"`
	Description         string               `json:"description"`
	SupportsCardEffects []SupportsCardEffect `gorm:"foreignKey:EffectId"`
	SupportsCards1      []SupportsCard       `gorm:"foreignKey:UniqueEffect1Id"`
	SupportsCards2      []SupportsCard       `gorm:"foreignKey:UniqueEffect2Id"`
}

type Skill struct {
	gorm.Model
	Name        string       `json:"name"`
	Description string       `json:"description"`
	Icon        string       `json:"icon"`
	CardsSkills []CardsSkill `gorm:"foreignKey:SkillId"`
}

type User struct {
	gorm.Model
	Name      string         `json:"name,omitempty"`
	Email     string         `json:"email"`
	Password  string         `json:"pass"`
	Deck1     datatypes.JSON `json:"deck_1,omitempty"`
	Deck2     datatypes.JSON `json:"deck_2,omitempty"`
	Deck3     datatypes.JSON `json:"deck_3,omitempty"`
	Deck4     datatypes.JSON `json:"deck_4,omitempty"`
	Deck5     datatypes.JSON `json:"deck_5,omitempty"`
	UserCards []UsersCard    `gorm:"foreignKey:UserId"`
}

type UsersCard struct {
	gorm.Model
	UserId    int `json:"user_id"`
	CardId    int `json:"card_id"`
	Duplicate int `json:"duplicate"`
}
