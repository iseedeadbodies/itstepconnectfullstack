package routes

import (
	"itstep-connect-backend/controllers"
	"itstep-connect-backend/middleware"

	"github.com/gin-gonic/gin"
)

func SetupRoutes(r *gin.Engine) {
	r.POST("/register", controllers.Register)
	r.POST("/login", controllers.Login)

	r.GET("/posts", controllers.GetPosts)
	r.POST("/posts", middleware.AuthMiddleware(), controllers.CreatePost)
	r.PUT("/posts/:id", middleware.AuthMiddleware(), controllers.UpdatePost)
	r.DELETE("/posts/:id", middleware.AuthMiddleware(), controllers.DeletePost)

	r.GET("/clubs", controllers.GetClubs)
	r.POST("/clubs", middleware.AuthMiddleware(), controllers.CreateClub)
	r.PUT("/clubs/:id", middleware.AuthMiddleware(), controllers.UpdateClub)
	r.DELETE("/clubs/:id", middleware.AuthMiddleware(), controllers.DeleteClub)

	r.GET("/news", controllers.GetNews)
	r.POST("/news", middleware.AuthMiddleware(), controllers.CreateNews)
	r.PUT("/news/:id", middleware.AuthMiddleware(), controllers.UpdateNews)
	r.DELETE("/news/:id", middleware.AuthMiddleware(), controllers.DeleteNews)

	r.GET("/messages", controllers.GetMessages)
	r.POST("/messages", controllers.CreateMessage)
}
