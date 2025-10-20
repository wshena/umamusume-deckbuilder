package repositories

import (
	"errors"
	models "uma/api/Models"

	"gorm.io/gorm"
)

type InventoryRepository interface {
	AddUserCard(user models.UsersCard) error
	GetUserCard(id int) []models.UsersCard
}

type inventoryRepository struct {
	db *gorm.DB
}

func NewInventoryRepository(db *gorm.DB) *inventoryRepository {
	return &inventoryRepository{db}
}

func (i *inventoryRepository) AddUserCard(user models.UsersCard) error {
	var userCard models.UsersCard
	i.db.Model(&models.UsersCard{}).Select("id, user_id, card_id, duplicate").Where("user_id = ?", user.UserId).Where("card_id = ?", user.CardId).Find(&userCard)

	if userCard.ID == 0 {
		i.db.Model(&models.UsersCard{}).Create(&user)
	} else if userCard.Duplicate != 4 {
		userCard.Duplicate = userCard.Duplicate + 1
		i.db.Model(&models.UsersCard{}).Where("id = ?", userCard.ID).Save(&userCard) //TODO: <- ganti 'save' ke 'update'
	} else if userCard.Duplicate == 4 {
		return errors.New("jumlah card maksimal")
	} else {
		return errors.New("unexpended error")
	}
	return nil
}

func (i *inventoryRepository) GetUserCard(id int) []models.UsersCard {
	var user []models.UsersCard
	i.db.Model(&models.UsersCard{}).Where("user_id = ?", id).Scan(&user)
	return user
}
