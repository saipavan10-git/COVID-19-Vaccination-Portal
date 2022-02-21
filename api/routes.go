package main

import (
	"net/http"

	"github.com/julienschmidt/httprouter"
)

func (app *application) routes() http.Handler {
	router := httprouter.New()

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
