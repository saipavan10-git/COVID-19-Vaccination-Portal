package main

import (
	"backend/models"
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/sqlite"
	"github.com/julienschmidt/httprouter"
)

var results string

func (app *application) getOneVaccine(w http.ResponseWriter, r *http.Request) {
	db, _ := gorm.Open("sqlite3", "./vaccine.db")
	defer db.Close()
	params := httprouter.ParamsFromContext(r.Context())
	fmt.Println(params)
	id := params.ByName("id")

	var p1 []models.Vaccine
	db.Where("name = ?", id).Find(&p1)
	app.writeJSON(w, http.StatusOK, p1, "vaccines")
	log.Println(p1)

}

func (app *application) getAllVaccines(w http.ResponseWriter, r *http.Request) {
	db, _ := gorm.Open("sqlite3", "./vaccine.db")
	defer db.Close()

	var p5 []models.Vaccine
	db.Find(&p5)
	fmt.Println(p5)

	app.writeJSON(w, http.StatusOK, p5, "vaccines")

}

func (app *application) getBooking(w http.ResponseWriter, r *http.Request) {

	var vaccine models.Vaccine

	err := json.NewDecoder(r.Body).Decode(&vaccine)
	if err != nil {
		app.errorJSON(w, err)
		return
	}
	//print vaccine info from front end
	log.Println(vaccine)
	log.Println("Vaccine with ID ", vaccine.ID, " is booked.")
	log.Println("Detailed Info:", vaccine.Name, ",", vaccine.VaccineNum, "-dose.")
}

func (app *application) recordSignup(w http.ResponseWriter, r *http.Request) {
	db, _ := gorm.Open("sqlite3", "./vaccine.db")
	defer db.Close()

	var user models.User
	err := json.NewDecoder(r.Body).Decode(&user)
	if err != nil {
		app.errorJSON(w, err)
		return
	}
	log.Println(user)
	db.Table("user").Create(&user)
}

func (app *application) searchRecord(w http.ResponseWriter, r *http.Request) {
	db, _ := gorm.Open("sqlite3", "./vaccine.db")
	defer db.Close()

	var result models.SearchVaccine
	err := json.NewDecoder(r.Body).Decode(&result)
	if err != nil {
		app.errorJSON(w, err)
		return
	}

	results = result.Result

}

func (app *application) searchResult(w http.ResponseWriter, r *http.Request) {
	db, _ := gorm.Open("sqlite3", "./vaccine.db")
	defer db.Close()

	var result models.SearchVaccine
	err := json.NewDecoder(r.Body).Decode(&result)
	if err != nil {
		app.errorJSON(w, err)
		return
	}

	var p1 []models.Vaccine
	db.Where("name = ?", results).Find(&p1)
	app.writeJSON(w, http.StatusOK, p1, "vaccines")
	log.Println(p1)

}
