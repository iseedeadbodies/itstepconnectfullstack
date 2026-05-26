package models

import "gorm.io/gorm"

type Club struct {
	gorm.Model

	Name        string `json:"name"`
	Description string `json:"description"`
	Schedule    string `json:"schedule"`
	Contact     string `json:"contact"`
}
