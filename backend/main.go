package main

import (
	"fmt"

	"itstep-connect-backend/config"
	"itstep-connect-backend/models"
	"itstep-connect-backend/routes"

	"github.com/gin-gonic/gin"
)

func main() {

	config.ConnectDatabase()

	err := config.DB.AutoMigrate(
		&models.User{},
		&models.Post{},
		&models.Club{},
		&models.News{},
	)

	if err != nil {
		fmt.Println("Migration error:", err)
	} else {
		fmt.Println("Migration completed")
	}

	r := gin.Default()

	routes.SetupRoutes(r)

	r.GET("/", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "Backend is running",
		})
	})

	r.Run(":8080")
}
