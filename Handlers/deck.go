package handlers

import (
	"encoding/json"
	"net/http"
	"strconv"
	models "uma/api/Models"
	services "uma/api/Services"
)

type DeckHandler interface {
	AddUserDeck(res http.ResponseWriter, req *http.Request)
	GetAllUserDeck(res http.ResponseWriter, req *http.Request)
	GetUserDeck(res http.ResponseWriter, req *http.Request)
}

type deckHandler struct {
	deckServices services.DeckServices
}

func NewDeckHandler(deckServices services.DeckServices) DeckHandler {
	return &deckHandler{deckServices}
}

func (d *deckHandler) AddUserDeck(res http.ResponseWriter, req *http.Request) {

	userId, err := strconv.Atoi(req.PathValue("user_id"))
	if err != nil {
		http.Error(res, "Path salah", 500)
		return
	}

	deckNumb, err := strconv.Atoi(req.PathValue("deck_number"))
	if err != nil {
		http.Error(res, "Path salah", 500)
		return
	}

	var deck models.Deck
	deck.Cards = []models.DeckCard{}

	/*
			!! Example JSON Format !!
		{
			"deck_number": 1,
			"deck_name": "test deck",
			"created_at": "2025-10-03T07:00:00+07:00",
			"updated_at": "2025-10-03T07:00:00+07:00",
			"cards": [
				{
					"card_id": 1,
					"name": "card 1",
					"image": "card image 1",
					"duplicate": 1
				},
				{
					"card_id": 2,
					"name": "card 2",
					"image": "card image 2",
					"duplicate": 2
				}
			]
		}
	*/

	err = json.NewDecoder(req.Body).Decode(&deck)
	if err != nil {
		http.Error(res, err.Error(), 500)
		return
	}

	defer req.Body.Close()
	d.deckServices.AddUserDeck(userId, deckNumb, deck)
}

func (d *deckHandler) GetAllUserDeck(res http.ResponseWriter, req *http.Request) {
	userId, err := strconv.Atoi(req.PathValue("user_id"))
	if err != nil {
		http.Error(res, "Path salah", 500)
		return
	}

	userDeck := d.deckServices.GetAllUserDeck(userId)

	data, err := json.Marshal(userDeck)
	if err != nil {
		http.Error(res, "Proses Error", 500)
		return
	}

	res.Write(data)
}

func (d *deckHandler) GetUserDeck(res http.ResponseWriter, req *http.Request) {
	userId, err := strconv.Atoi(req.PathValue("user_id"))
	if err != nil {
		http.Error(res, "Path salah", 500)
		return
	}

	deckNumb, err := strconv.Atoi(req.PathValue("deck_number"))
	if err != nil {
		http.Error(res, "Path salah", 500)
		return
	}

	userDeck := d.deckServices.GetUserDeck(userId, deckNumb)

	data, err := json.Marshal(userDeck)
	if err != nil {
		http.Error(res, err.Error(), 500)
		return
	}

	res.Write(data)
}
