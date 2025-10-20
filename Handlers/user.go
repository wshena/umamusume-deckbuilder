package handlers

import (
	"encoding/json"
	"net/http"
	"time"
	models "uma/api/Models"
	services "uma/api/Services"
)

type UserHandler interface {
	SignIn(res http.ResponseWriter, req *http.Request)
	Login(res http.ResponseWriter, req *http.Request)
	Logout(res http.ResponseWriter, req *http.Request)
}

type userHandler struct {
	userServices services.UserServices
}

func NewUserHandler(userServices services.UserServices) UserHandler {
	return &userHandler{userServices}
}

func (u *userHandler) SignIn(res http.ResponseWriter, req *http.Request) {
	var user models.User
	err := json.NewDecoder(req.Body).Decode(&user)
	if err != nil {
		http.Error(res, err.Error(), 500)
		return
	}

	u.userServices.SignIn(user)
}

func (u *userHandler) Login(res http.ResponseWriter, req *http.Request) {
	var user models.User
	err := json.NewDecoder(req.Body).Decode(&user)
	if err != nil {
		http.Error(res, err.Error(), 500)
		return
	}

	token, err := u.userServices.Login(user)
	if err != nil {
		http.Error(res, err.Error(), 500)
		return
	}

	cookies := http.Cookie{
		Name:     "jwt_token",
		Value:    token,
		Path:     "/",
		HttpOnly: true,
		Secure:   true,
		MaxAge:   0,
		Expires:  time.Now().Add(time.Hour * 24),
		SameSite: http.SameSiteLaxMode,
	}

	http.SetCookie(res, &cookies)
}

func (u *userHandler) Logout(res http.ResponseWriter, req *http.Request) {
	// expire cookies
	cookies := http.Cookie{
		Name:     "jwt_token",
		Value:    "",
		Path:     "/",
		HttpOnly: true,
		Secure:   true,
		MaxAge:   -1,
		Expires:  time.Unix(0, 0),
		SameSite: http.SameSiteLaxMode,
	}

	http.SetCookie(res, &cookies)
}
