package main

import (
	"backend/models"
	"encoding/json"
	"errors"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"time"

	"github.com/dgrijalva/jwt-go"
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/sqlite"
	"github.com/julienschmidt/httprouter"
	"golang.org/x/crypto/bcrypt"
)

const SecretKey = "secret"

var results string
var i string = "\"\""

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
func (app *application) getOneVaccineProcess() ([]models.Vaccine, error) {
	db, _ := gorm.Open("sqlite3", "./vaccine.db")
	defer db.Close()

	var p5 []models.Vaccine
	err := db.Find(&p5).Error
	fmt.Println(p5)
	if err != nil {
		return nil, err
	}
	return p5, nil
}

func (app *application) getAllVaccines(w http.ResponseWriter, r *http.Request) {
	p5, err := app.getAllVaccinesProcess()
	if err != nil {
		app.errorJSON(w, err)
	}
	app.writeJSON(w, http.StatusOK, p5, "vaccines")
}

func (app *application) getAllVaccinesProcess() ([]models.Vaccine, error) {
	db, _ := gorm.Open("sqlite3", "./vaccine.db")
	defer db.Close()

	var p5 []models.Vaccine
	err := db.Find(&p5).Error
	fmt.Println(p5)
	if err != nil {
		return nil, err
	}
	return p5, nil
}

func (app *application) getBooking(w http.ResponseWriter, r *http.Request) {
	db, _ := gorm.Open("sqlite3", "./vaccine.db")
	// dbUser, _ := gorm.Open("sqlite3", "./user.db")
	time.Sleep(3 * time.Second)
	defer db.Close()
	var vaccine models.Vaccine
	log.Println("2")

	err := json.NewDecoder(r.Body).Decode(&vaccine)
	if err != nil {
		app.errorJSON(w, err)
		return
	}
	log.Println(vaccine)
	log.Println("this is ", i)

	if i != "\"\"" {
		db.Model(&vaccine).Update("available", 0)
		log.Println("Vaccine with ID ", vaccine.ID, " is booked.")
		log.Println("Detailed Info:", vaccine.Name, ",", vaccine.VaccineNum, "-dose.")
		log.Println("Availability: ", vaccine.Available)
		i = "\"\""
	} else {
		app.errorJSON(w, errors.New("no user"))
	}
}

func (app *application) recordSignup(w http.ResponseWriter, r *http.Request) {
	db, _ := gorm.Open("sqlite3", "./user.db")
	defer db.Close()
	db.AutoMigrate(&models.User{})
	var user models.User
	err := json.NewDecoder(r.Body).Decode(&user)
	if err != nil {
		app.errorJSON(w, err)
		return
	}

	encryptedPassword, _ := bcrypt.GenerateFromPassword([]byte(user.Password), 14)
	encryptedUser := models.User{
		Email:    user.Email,
		Password: string(encryptedPassword),
		Fname:    user.Fname,
		Lname:    user.Lname,
	}

	db.Create(&encryptedUser)
}

func (app *application) login(w http.ResponseWriter, r *http.Request) {
	db, _ := gorm.Open("sqlite3", "./user.db")
	defer db.Close()

	var user models.User

	err := json.NewDecoder(r.Body).Decode(&user)
	if err != nil {
		app.errorJSON(w, err)
		return
	}

	var findUser models.User
	db.Where("email = ?", user.Email).Take(&findUser)

	var empty models.User
	log.Println(findUser)

	if findUser == empty {
		app.errorJSON(w, errors.New("user not found"))
		return
	}

	if err := bcrypt.CompareHashAndPassword([]byte(findUser.Password), []byte(user.Password)); err != nil {
		app.errorJSON(w, errors.New("unauthorized"))
		return
	} else {

		claims := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.StandardClaims{
			Issuer:    user.Email,
			ExpiresAt: time.Now().Add(time.Hour * 24).Unix(),
		})

		token, _ := claims.SignedString([]byte(SecretKey))

		if err != nil {
			app.errorJSON(w, errors.New("could not log in"))
			return
		} else {
			http.SetCookie(w, &http.Cookie{
				Name:     "token",
				Value:    token,
				Expires:  time.Now().Add(time.Hour * 24),
				HttpOnly: true,
			})
			app.writeJSON(w, http.StatusOK, token, "token")

		}
	}

}

func (app *application) user(w http.ResponseWriter, r *http.Request) {
	db, _ := gorm.Open("sqlite3", "./user.db")
	defer db.Close()
	c, err := r.Cookie("token")
	if err != nil {
		if err == http.ErrNoCookie {
			// If the cookie is not set, return an unauthorized status
			// app.errorJSON(w, err)
			// w.WriteHeader(http.StatusUnauthorized)
			return
		}
		// w.WriteHeader(http.StatusBadRequest)
		return
	}
	tknStr := c.Value

	tkn, err := jwt.ParseWithClaims(tknStr, &jwt.StandardClaims{}, func(token *jwt.Token) (interface{}, error) {
		return []byte(SecretKey), nil
	})

	if err != nil {
		if err == jwt.ErrSignatureInvalid {
			w.WriteHeader(http.StatusUnauthorized)
			return
		}
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	claims := tkn.Claims.(*jwt.StandardClaims)
	var user models.User

	db.Where("email = ?", claims.Issuer).Take(&user)

	app.writeJSON(w, http.StatusOK, user, "message")
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

func (app *application) logout(w http.ResponseWriter, r *http.Request) {

	i = "\"\""

	http.SetCookie(w, &http.Cookie{
		Name:     "token",
		Value:    "",
		Expires:  time.Now().Add(-time.Hour),
		HttpOnly: true,
	})
	log.Println(i)
	//return
}

func (app *application) receiveFront(w http.ResponseWriter, r *http.Request) {
	db, _ := gorm.Open("sqlite3", "./appointment.db")
	defer db.Close()
	db.AutoMigrate(&models.UserAppoint{})

	body, err := ioutil.ReadAll(r.Body)
	if err != nil {
		panic(err)
	}

	if string(body) != "\"\"" {
		i = string(body)
		log.Println(i)
		log.Println("1")
	} else {
		app.errorJSON(w, errors.New("please sign in"))
	}

}
