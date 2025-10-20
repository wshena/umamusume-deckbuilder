package services

import (
	"crypto/sha256"
	"encoding/hex"
	"fmt"
	jwts "uma/api/JWT"
	models "uma/api/Models"
	repositories "uma/api/Repositories"
)

type UserServices interface {
	SignIn(user models.User)
	Login(user models.User) (string, error)
}

type userServices struct {
	userRepository repositories.UserRepository
}

func NewUserServices(userRepository repositories.UserRepository) UserServices {
	return &userServices{userRepository}
}

func (u *userServices) SignIn(user models.User) {
	hash := sha256.New()
	hash.Write([]byte(user.Password))
	data := hash.Sum(nil)
	user.Password = hex.EncodeToString(data)
	u.userRepository.SignIn(user)
}

func (u *userServices) Login(user models.User) (string, error) {
	hash := sha256.New()
	hash.Write([]byte(user.Password))
	data := hash.Sum(nil)
	user.Password = hex.EncodeToString(data)

	check := u.userRepository.Login(user.Email)

	if check.Password == user.Password {
		token, err := jwts.CreateToken(user.Name)
		if err != nil {
			return "", err
		}

		return token, nil
	} else {
		return "", fmt.Errorf("email atau password salah")
	}
}
