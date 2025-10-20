package services

import (
	models "uma/api/Models"
	repositories "uma/api/Repositories"
)

type InventoryService interface {
	AddUserCard(user models.UsersCard) error
	GetUserCard(id int) []models.UsersCard
}

type inventoryService struct {
	inventoryRepository repositories.InventoryRepository
}

func NewInventoryService(inventoryRepository repositories.InventoryRepository) InventoryService {
	return &inventoryService{inventoryRepository}
}

func (i *inventoryService) AddUserCard(user models.UsersCard) error {
	return i.inventoryRepository.AddUserCard(user)
}

func (i *inventoryService) GetUserCard(id int) []models.UsersCard {
	return i.inventoryRepository.GetUserCard(id)
}
