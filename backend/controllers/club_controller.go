package controllers

import (
	"net/http"

	"itstep-connect-backend/config"
	"itstep-connect-backend/models"

	"github.com/gin-gonic/gin"
)

func GetClubs(c *gin.Context) {
	var clubs []models.Club
	config.DB.Find(&clubs)

	c.JSON(http.StatusOK, clubs)
}

func CreateClub(c *gin.Context) {
	var club models.Club

	if err := c.ShouldBindJSON(&club); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "Invalid input",
		})
		return
	}

	config.DB.Create(&club)

	c.JSON(http.StatusOK, gin.H{
		"message": "Club created",
		"club":    club,
	})
}

func UpdateClub(c *gin.Context) {
	id := c.Param("id")

	var club models.Club

	if err := config.DB.First(&club, id).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{
			"error": "Club not found",
		})
		return
	}

	if err := c.ShouldBindJSON(&club); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "Invalid input",
		})
		return
	}

	config.DB.Save(&club)

	c.JSON(http.StatusOK, gin.H{
		"message": "Club updated",
		"club":    club,
	})
}

func DeleteClub(c *gin.Context) {
	id := c.Param("id")

	var club models.Club

	if err := config.DB.First(&club, id).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{
			"error": "Club not found",
		})
		return
	}

	config.DB.Delete(&club)

	c.JSON(http.StatusOK, gin.H{
		"message": "Club deleted",
	})
}
