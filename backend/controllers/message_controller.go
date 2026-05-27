package controllers

import (
	"context"
	"net/http"
	"time"

	"itstep-connect-backend/config"

	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/v2/bson"
)

type Message struct {
	ID         bson.ObjectID `json:"id,omitempty" bson:"_id,omitempty"`
	SenderID   int           `json:"sender_id" bson:"sender_id"`
	ReceiverID int           `json:"receiver_id" bson:"receiver_id"`
	Text       string        `json:"text" bson:"text"`
	CreatedAt  time.Time     `json:"created_at" bson:"created_at"`
}

func CreateMessage(c *gin.Context) {
	var message Message

	if err := c.ShouldBindJSON(&message); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid input"})
		return
	}

	message.CreatedAt = time.Now()

	collection := config.MongoClient.Database("itstep_connect").Collection("messages")

	result, err := collection.InsertOne(context.Background(), message)

	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Message not saved"})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"message": "Message created in MongoDB",
		"id":      result.InsertedID,
	})
}

func GetMessages(c *gin.Context) {
	collection := config.MongoClient.Database("itstep_connect").Collection("messages")

	cursor, err := collection.Find(context.Background(), bson.M{})

	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Messages not found"})
		return
	}

	var messages []Message

	if err := cursor.All(context.Background(), &messages); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Decode error"})
		return
	}

	c.JSON(http.StatusOK, messages)
}
