package controllers

import (
	"net/http"
	"time"

	"itstep-connect-backend/config"
	"itstep-connect-backend/models"

	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v5"
	"golang.org/x/crypto/bcrypt"
)

var jwtKey = []byte("secret_key")

type RegisterInput struct {
	FirstName string `json:"first_name"`
	LastName  string `json:"last_name"`
	Email     string `json:"email"`
	Password  string `json:"password"`
}

func Register(c *gin.Context) {

	var input RegisterInput

	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "Invalid input",
		})
		return
	}

	hashedPassword, _ := bcrypt.GenerateFromPassword(
		[]byte(input.Password),
		bcrypt.DefaultCost,
	)

	user := models.User{
		FirstName: input.FirstName,
		LastName:  input.LastName,
		Email:     input.Email,
		Password:  string(hashedPassword),
		Role:      "student",
	}

	config.DB.Create(&user)

	c.JSON(http.StatusOK, gin.H{
		"message": "User registered",
	})
}

type LoginInput struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}

func Login(c *gin.Context) {

	var input LoginInput
	var user models.User

	if err := c.ShouldBindJSON(&input); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "Invalid input",
		})
		return
	}

	config.DB.Where("email = ?", input.Email).First(&user)

	err := bcrypt.CompareHashAndPassword(
		[]byte(user.Password),
		[]byte(input.Password),
	)

	if err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{
			"error": "Wrong password",
		})
		return
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"user_id": user.ID,
		"exp":     time.Now().Add(time.Hour * 24).Unix(),
	})

	tokenString, _ := token.SignedString(jwtKey)

	c.JSON(http.StatusOK, gin.H{
		"token": tokenString,
	})
}
