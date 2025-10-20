package repositories

import (
	models "uma/api/Models"

	"gorm.io/gorm"
)

type UserRepository interface {
	SignIn(user models.User)
	Login(email string) models.User
}

type userRepository struct {
	db *gorm.DB
}

func NewUserRepository(db *gorm.DB) UserRepository {
	return &userRepository{db}
}

func (u *userRepository) SignIn(user models.User) {
	u.db.Model(&models.User{}).Create(&user)
}

func (u *userRepository) Login(email string) models.User {
	var check models.User
	u.db.Model(&models.User{}).Select("email, password").Where("email = ?", email).Scan(&check)
	return check
}
