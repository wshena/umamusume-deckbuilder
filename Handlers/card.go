package handlers

import (
	"encoding/json"
	"fmt"
	"net/http"
	"strconv"
	services "uma/api/Services"
)

type CardsHandler interface {
	GetSupportCards(res http.ResponseWriter, req *http.Request)
	GetSupportCardsById(res http.ResponseWriter, req *http.Request)
	GetSupportCardsByFilter(res http.ResponseWriter, req *http.Request)
}

type cardsHandler struct {
	cardsServices services.CardsServices
}

func NewCardsHandler(cardsServices services.CardsServices) CardsHandler {
	return &cardsHandler{cardsServices}
}

func (h *cardsHandler) GetSupportCards(res http.ResponseWriter, req *http.Request) {
	if len(req.URL.Query()) > 0 {
		h.GetSupportCardsByFilter(res, req)
	} else {
		h.GetSupportCardsAll(res, req)
	}
}

func (h *cardsHandler) GetSupportCardsAll(res http.ResponseWriter, req *http.Request) {
	res.Header().Set("Content-Type", "application/json")

	data, _ := json.Marshal(h.cardsServices.GetSupportCards())

	res.Write(data)
}

func (h *cardsHandler) GetSupportCardsById(res http.ResponseWriter, req *http.Request) {
	id, err := strconv.Atoi(req.PathValue("id"))
	//TODO: implement fail system (fail jika data tidak ada)
	if err != nil {
		http.Error(res, "Path salah", 500)
		return
	}

	data, _ := json.Marshal(h.cardsServices.GetSupportCardsById(id))

	res.Write(data)
}

func (h *cardsHandler) GetSupportCardsByFilter(res http.ResponseWriter, req *http.Request) {
	params := req.URL.Query()
	rarity := params.Get("Rarity") // <- multiple
	types := params.Get("Type")    // <- multiple
	name := params.Get("Name")
	order := params.Get("Order")

	skill, err := strconv.Atoi(params.Get("Skill")) //<- multiple
	if err != nil {
		fmt.Println(err)
	}
	effect, err := strconv.Atoi(params.Get("Effect")) //<- multiple
	if err != nil {
		fmt.Println(err)
	}

	cards := h.cardsServices.GetSupportCardsByFilter(rarity, types, name, skill, effect, order)

	data, _ := json.Marshal(cards)
	res.Write(data)
}
