package handlers

import (
	"encoding/json"
	"net/http"
	models "uma/api/Models"
	services "uma/api/Services"
)

type CardsHandler interface {
	LandingPage(res http.ResponseWriter, req *http.Request)
	GetSupportCards(res http.ResponseWriter, req *http.Request)
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
