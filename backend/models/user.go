package models

import "gorm.io/gorm"

type User struct {
	gorm.Model

	FirstName string `json:"first_name"`
	LastName  string `json:"last_name"`
	Email     string `json:"email" gorm:"unique"`
	Password  string `json:"password"`
	Role      string `json:"role"`
	GroupName string `json:"group_name"`
	Direction string `json:"direction"`
	Bio       string `json:"bio"`
}
