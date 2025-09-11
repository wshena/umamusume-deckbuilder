package handlers

import (
	"encoding/json"
	"fmt"
	"net/http"
	"strconv"
	models "uma/api/Models"
	services "uma/api/Services"
)

type CardsHandler interface {
	LandingPage(res http.ResponseWriter, req *http.Request)
	GetSupportCards(res http.ResponseWriter, req *http.Request)
	GetSupportCardsById(res http.ResponseWriter, req *http.Request)
}

type cardsHandler struct {
	cardsServices services.CardsServices
}

func NewCardsHandler(cardsServices services.CardsServices) CardsHandler {
	return &cardsHandler{cardsServices}
}

func (h *cardsHandler) LandingPage(res http.ResponseWriter, req *http.Request) {
	var notice = models.Messages{Message: "Hai"}

	res.Header().Set("Content-Type", "application/json")

	message, _ := json.Marshal(notice)
	res.Write(message)
}

func (h *cardsHandler) GetSupportCards(res http.ResponseWriter, req *http.Request) {
	cards := h.cardsServices.GetSupportCards()
	res.Header().Set("Content-Type", "application/json")

	data, _ := json.Marshal(cards)

	res.Write(data)
}

func (h *cardsHandler) GetSupportCardsById(res http.ResponseWriter, req *http.Request) {
	id, err := strconv.Atoi(req.PathValue("id"))
	//TODO: implement fail system
	if err != nil {
		fmt.Println(err)
	}

	card := h.cardsServices.GetSupportCardsById(id)

	data, _ := json.Marshal(card)

	res.Write(data)
}
