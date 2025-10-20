package handlers

import (
	"encoding/json"
	"net/http"
	"strconv"
	models "uma/api/Models"
	services "uma/api/Services"
)

type InventoryHandler interface {
	AddUserCard(res http.ResponseWriter, req *http.Request)
	GetUserCard(res http.ResponseWriter, req *http.Request)
}

type inventoryHandler struct {
	inventoryService services.InventoryService
}

func NewInventoryHandler(inventoryService services.InventoryService) InventoryHandler {
	return &inventoryHandler{inventoryService}
}

func (i *inventoryHandler) AddUserCard(res http.ResponseWriter, req *http.Request) {
	var user models.UsersCard

	user_id, err := strconv.Atoi(req.PathValue("user_id"))
	if err != nil {
		http.Error(res, "Path salah", 500)
		return
	}

	card_id, err := strconv.Atoi(req.PathValue("card_id"))
	if err != nil {
		http.Error(res, "Path salah", 500)
		return
	}

	user.UserId = user_id
	user.CardId = card_id

	err = i.inventoryService.AddUserCard(user)
	if err != nil {
		http.Error(res, err.Error(), 500)
		return
	} else {
		data, err := json.Marshal(models.Messages{Message: "Data berhasil di update"})
		if err != nil {
			http.Error(res, "Proses Error", 500)
			return
		}

		res.Write(data)
	}
}

func (i *inventoryHandler) GetUserCard(res http.ResponseWriter, req *http.Request) {
	id, err := strconv.Atoi(req.PathValue("user_id"))
	if err != nil {
		http.Error(res, "Path salah", 500)
		return
	}
	userCard := i.inventoryService.GetUserCard(id)

	data, err := json.Marshal(userCard)

	if err != nil {
		http.Error(res, "Proses Error", 500)
		return
	}

	res.Write(data)
}
