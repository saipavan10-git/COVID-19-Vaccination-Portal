package main

import (
	"net/http"

	"github.com/julienschmidt/httprouter"
)

func (app *application) routes() http.Handler {
	router := httprouter.New()
	router.GlobalOPTIONS = http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		if r.Header.Get("Access-Control-Request-Method") != "" {
			// Set CORS headers
			header := w.Header()
			header.Set("Access-Control-Allow-Methods", header.Get("Allow"))
			header.Set("Access-Control-Allow-Origin", r.Header.Get("Origin"))
			header.Set("Access-Control-Allow-Headers", "Content-Type,origin")
		}
		// Adjust status code to 204
		w.WriteHeader(http.StatusNoContent)
	})
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
