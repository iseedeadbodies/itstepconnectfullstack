package controllers

import (
	"net/http"

	"itstep-connect-backend/config"
	"itstep-connect-backend/models"

	"github.com/gin-gonic/gin"
)

func GetNews(c *gin.Context) {
	var news []models.News
	config.DB.Find(&news)

	c.JSON(http.StatusOK, news)
}

func CreateNews(c *gin.Context) {
	var news models.News

	if err := c.ShouldBindJSON(&news); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid input"})
		return
	}

	config.DB.Create(&news)

	c.JSON(http.StatusOK, gin.H{
		"message": "News created",
		"news":    news,
	})
}

func UpdateNews(c *gin.Context) {
	id := c.Param("id")

	var news models.News

	if err := config.DB.First(&news, id).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "News not found"})
		return
	}

	if err := c.ShouldBindJSON(&news); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid input"})
		return
	}

	config.DB.Save(&news)

	c.JSON(http.StatusOK, gin.H{
		"message": "News updated",
		"news":    news,
	})
}

func DeleteNews(c *gin.Context) {
	id := c.Param("id")

	var news models.News

	if err := config.DB.First(&news, id).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "News not found"})
		return
	}

	config.DB.Delete(&news)

	c.JSON(http.StatusOK, gin.H{
		"message": "News deleted",
	})
}
