package controllers

import (
	"net/http"

	"itstep-connect-backend/config"
	"itstep-connect-backend/models"

	"github.com/gin-gonic/gin"
)

func GetPosts(c *gin.Context) {
	var posts []models.Post
	config.DB.Find(&posts)

	c.JSON(http.StatusOK, posts)
}

func CreatePost(c *gin.Context) {
	var post models.Post

	if err := c.ShouldBindJSON(&post); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid input"})
		return
	}

	config.DB.Create(&post)

	c.JSON(http.StatusOK, gin.H{
		"message": "Post created",
		"post":    post,
	})
}

func UpdatePost(c *gin.Context) {
	id := c.Param("id")

	var post models.Post

	if err := config.DB.First(&post, id).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Post not found"})
		return
	}

	if err := c.ShouldBindJSON(&post); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid input"})
		return
	}

	config.DB.Save(&post)

	c.JSON(http.StatusOK, gin.H{
		"message": "Post updated",
		"post":    post,
	})
}

func DeletePost(c *gin.Context) {
	id := c.Param("id")

	var post models.Post

	if err := config.DB.First(&post, id).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Post not found"})
		return
	}

	config.DB.Delete(&post)

	c.JSON(http.StatusOK, gin.H{
		"message": "Post deleted",
	})
}
