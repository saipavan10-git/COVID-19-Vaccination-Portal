package router

import (
	"fmt"

	"github.com/gin-gonic/gin"
)

func RunServer() {
	r := gin.Default()
	r.Use(CORSMiddleware())
	r.GET("/v1/status", status)
	r.GET("/v1/vaccine/:id", CORSMiddleware(), getOneVaccine)
	r.GET("/v1/vaccines", CORSMiddleware(), getAllVaccines)
	r.POST("/v1/test", CORSMiddleware(), recordSignup)
	r.POST("/v1/login", login)
	r.GET("/v1/user", user)
	r.POST("/v1/logout", logout)
	r.POST("/v1/booking", getBooking)
	r.GET("/v1/appoint", getAppoint)
	r.GET("/v1/code", confirmCode)
	r.POST("/v1/deleteBooking", deleteBooking)
	r.POST("/v1/updateUser", updateUser)
	r.POST("/v1/searchCode", searchCode)
	r.GET("/v1/displayCert", displayCert)
	r.POST("/v1/addVaccine", addVaccine)
	// r.GET("/v1/receive",receiveFront)
	// r.GET("/v1/test/result", searchResult)
	// r.POST("/v1/test/result",searchRecord)
	r.POST("/v1/survey", survey)
	r.POST("/v1/AdminLogin", adminlogin)
	r.POST("/v1/AdminUser", adminuser)
	r.POST("/v1/AdminLogout", adminlogout)

	fmt.Println("Hello!")
	r.Run(":4000")
}

func CORSMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	}
}
