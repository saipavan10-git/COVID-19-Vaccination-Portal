package main

import (
	"net/http"
	//"time"

	//"github.com/gin-contrib/cors"
	//"github.com/gin-gonic/gin"
	"github.com/julienschmidt/httprouter"
)

func (app *application) routes() http.Handler {
	router := httprouter.New()
	//m()
	router.HandlerFunc(http.MethodGet, "/status", app.statusHandler)
	router.HandlerFunc(http.MethodGet, "/v1/vaccine/:id", app.getOneVaccine)
	router.HandlerFunc(http.MethodGet, "/v1/vaccines", app.getAllVaccines)
	router.HandlerFunc(http.MethodPost, "/v1/booking", app.getBooking)
	router.HandlerFunc(http.MethodPost, "/v1/test", app.recordSignup)
	router.HandlerFunc(http.MethodPost, "/v1/login", app.login)
	router.HandlerFunc(http.MethodGet, "/v1/user", app.user)
	router.HandlerFunc(http.MethodPost, "/v1/test/result", app.searchRecord)
	router.HandlerFunc(http.MethodGet, "/v1/test/result", app.searchResult)
	router.HandlerFunc(http.MethodPost, "/v1/logout", app.logout)
	return app.enableCORS(router)
}

// func m() {
// 	router := gin.Default()
// 	router.Use(cors.New(cors.Config{
// 		AllowOrigins:     []string{"https://foo.com"},
// 		AllowMethods:     []string{"PUT", "PATCH"},
// 		AllowHeaders:     []string{"Origin"},
// 		ExposeHeaders:    []string{"Content-Length"},
// 		AllowCredentials: true,
// 		AllowOriginFunc: func(origin string) bool {
// 			return origin == "https://github.com"
// 		},
// 		MaxAge: 12 * time.Hour,
// 	}))
// 	router.Run()
// }
