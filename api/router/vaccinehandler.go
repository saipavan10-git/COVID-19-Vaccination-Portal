package router

import (
	"backend/models"
	"fmt"
	"log"
	"math/rand"
	"net/http"
	"strconv"
	"strings"
	"time"

	"github.com/dgrijalva/jwt-go"
	"github.com/gin-gonic/gin"

	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/sqlite"
	"golang.org/x/crypto/bcrypt"
)

// var results string
var keyword int
var code int
var i string = "\"\""

const SecretKey = "secret"

//status
func status(c *gin.Context) {
	c.JSON(200, gin.H{
		"message": "everything is fine",
	})
}

//get one vaccine
func getOneVaccine(c *gin.Context) {
	db, err := gorm.Open("sqlite3", "db/vaccine.db")

	if err != nil {
		log.Println("err", err)
	}

	p1, _ := getOneVaccineProcess()
	err2 := db.Where("name = ?", "Pfizer").Find(&p1)

	log.Println("err2", err2)
	log.Println(p1)
	c.JSON(http.StatusOK, gin.H{"data": p1})
}

func getOneVaccineProcess() ([]models.Vaccine, error) {
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

func getBooking(c *gin.Context) {
	code = 0
	db, _ := gorm.Open("sqlite3", "db/vaccine.db")
	defer db.Close()
	dbAppoint, _ := gorm.Open("sqlite3", "db/appointment.db")
	defer dbAppoint.Close()
	dbAppoint.AutoMigrate(&models.UserAppoint{})
	time.Sleep(3 * time.Second)
	var vaccine models.Vaccine
	log.Println("2")

	err := c.ShouldBindJSON(&vaccine)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Not found!"})
		return
	}
	log.Println(vaccine)

	if i != "\"\"" {
		db.Model(&vaccine).Update("available", 0)
		log.Println("Vaccine with ID ", vaccine.ID, " is booked.")
		log.Println("Detailed Info:", vaccine.Name, ",", vaccine.VaccineNum, "-dose.")
		log.Println("Availability: ", vaccine.Available)

		trimmedString := strings.Trim(i, "\"")

		n := true
		var num int
		var checkUser models.UserAppoint
		for n {
			min := 100000
			max := 999999
			num = rand.Intn(max-min) + min

			dbAppoint.Where("code = ?", num).First(&checkUser)

			if checkUser.Code == 0 {
				n = false
			}
		}

		appointment := models.UserAppoint{
			Email: trimmedString,
			ID:    vaccine.ID,
			Code:  num,
		}
		code = num

		dbAppoint.Create(&appointment)
		i = "\"\""
		c.JSON(http.StatusOK, gin.H{"message": "success"})
	} else {
		c.JSON(http.StatusOK, gin.H{"message": "success"})
	}
}

//Get all vaccines
func getAllVaccines(c *gin.Context) {
	p5, err := getAllVaccinesProcess()
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Not found!"})
	}

	c.JSON(http.StatusOK, gin.H{"data": p5})
}

func getAllVaccinesProcess() ([]models.Vaccine, error) {
	db, _ := gorm.Open("sqlite3", "db/vaccine.db")
	defer db.Close()

	var p1 []models.Vaccine
	db.Find(&p1)

	return p1, nil
}

//Sign up
func recordSignup(c *gin.Context) {
	db, _ := gorm.Open("sqlite3", "db/user.db")
	defer db.Close()
	// use only if database is empty
	// db.AutoMigrate(&models.User{})
	var user models.User
	err := c.ShouldBindJSON(&user)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Not found!"})
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

//Login
func login(c *gin.Context) {
	db, _ := gorm.Open("sqlite3", "db/user.db")
	defer db.Close()

	var user models.User

	err := c.ShouldBindJSON(&user)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Not found!"})
		return
	}

	var findUser models.User
	db.Where("email = ?", user.Email).Take(&findUser)

	var empty models.User
	log.Println(findUser)

	if findUser == empty {
		c.JSON(http.StatusBadRequest, gin.H{"error": "User not found!"})
		return
	}

	if err := bcrypt.CompareHashAndPassword([]byte(findUser.Password), []byte(user.Password)); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "User not found!"})
		return
	} else {

		claims := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.StandardClaims{
			Issuer:    user.Email,
			ExpiresAt: time.Now().Add(time.Hour * 24).Unix(),
		})

		token, _ := claims.SignedString([]byte(SecretKey))

		if err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": "could not log in!"})
			return
		} else {
			c.SetCookie("token", token, 3600, "/", "localhost", false, true)
			c.JSON(http.StatusOK, gin.H{"token": token})

		}
	}

}

//get user page
func user(c *gin.Context) {
	db, _ := gorm.Open("sqlite3", "db/user.db")
	defer db.Close()
	cook, err := c.Cookie("token")
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
	tknStr := cook

	tkn, err := jwt.ParseWithClaims(tknStr, &jwt.StandardClaims{}, func(token *jwt.Token) (interface{}, error) {
		return []byte(SecretKey), nil
	})

	if err != nil {
		if err == jwt.ErrSignatureInvalid {
			c.JSON(http.StatusBadRequest, gin.H{"error": "could not log in!"})
			return
		}
		c.JSON(http.StatusBadRequest, gin.H{"error": "could not log in!"})
		return
	}

	claims := tkn.Claims.(*jwt.StandardClaims)
	var user models.User

	db.Where("email = ?", claims.Issuer).Take(&user)
	log.Println("123123123", user)
	i = claims.Issuer
	c.JSON(http.StatusOK, gin.H{"message": user})
}

//logout
func logout(c *gin.Context) {
	i = "\"\""

	c.SetCookie("token", "", -1000, "/", "localhost", false, true)
	log.Println(i)
}

//get appointment details on user page
func getAppoint(c *gin.Context) {

	dbAppoint, _ := gorm.Open("sqlite3", "db/appointment.db")
	defer dbAppoint.Close()
	db, _ := gorm.Open("sqlite3", "db/vaccine.db")
	defer db.Close()
	var user models.UserAppoint

	time.Sleep(1 * time.Second)
	if i != "\"\"" {
		dbAppoint.Where("email = ?", i).Take(&user)
		var vaccine models.Vaccine
		db.Where("id = ?", user.ID).Take(&vaccine)
		log.Println("Hey", vaccine)
		c.JSON(http.StatusOK, gin.H{"message": vaccine})

	} else {
		c.JSON(http.StatusBadRequest, gin.H{"message": "Bad Request"})
	}
}

//get confirmation code
func confirmCode(c *gin.Context) {

	newCode := fmt.Sprintf("%d", code)
	log.Println(newCode)
	appoint := models.Search{
		Value: newCode,
	}
	c.JSON(http.StatusOK, gin.H{"Great": &appoint})

}

//delete booking
func deleteBooking(c *gin.Context) {
	dbAppoint, _ := gorm.Open("sqlite3", "db/appointment.db")
	defer dbAppoint.Close()
	db, _ := gorm.Open("sqlite3", "db/vaccine.db")
	defer db.Close()

	var searchRecord models.Testing

	err := c.ShouldBindJSON(&searchRecord)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"message": "Bad Request"})
	}

	var user models.UserAppoint

	dbAppoint.Where("email = ?", searchRecord.Email).Delete(&user)

	var vaccine models.Vaccine
	db.Where("id = ?", searchRecord.Code).Find(&vaccine)
	db.Model(&vaccine).Update("available", 1)
}

//Update user
func updateUser(c *gin.Context) {

	db, _ := gorm.Open("sqlite3", "db/user.db")
	defer db.Close()

	var user models.User

	err := c.ShouldBindJSON(&user)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"message": "Bad Request"})
		return
	}

	log.Println(user.Birthdate)
	encryptedPassword, _ := bcrypt.GenerateFromPassword([]byte(user.Password), 14)

	encryptedUser := models.User{
		Email:     user.Email,
		Password:  string(encryptedPassword),
		Fname:     user.Fname,
		Lname:     user.Lname,
		Birthdate: user.Birthdate,
		SSN:       user.SSN,
	}

	log.Println(encryptedUser)
	db.Model(&user).Where("email = ?", encryptedUser.Email).Update("fname", encryptedUser.Fname)
	db.Model(&user).Where("email = ?", encryptedUser.Email).Update("lname", encryptedUser.Lname)
	db.Model(&user).Where("email = ?", encryptedUser.Email).Update("birthdate", encryptedUser.Birthdate)
	db.Model(&user).Where("email = ?", encryptedUser.Email).Update("ssn", encryptedUser.SSN)

	if len(user.Password) != 0 {
		db.Model(&user).Where("email = ?", encryptedUser.Email).Update("password", encryptedUser.Password)
	}
}

//Search code
func searchCode(c *gin.Context) {
	dbAppoint, _ := gorm.Open("sqlite3", "db/appointment.db")
	defer dbAppoint.Close()
	db, _ := gorm.Open("sqlite3", "db/vaccine.db")
	defer db.Close()

	var i models.Search

	err := c.ShouldBindJSON(&i)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"message": "Bad Request"})
		return
	}

	log.Println(i.Value)
	result, _ := strconv.Atoi(i.Value)
	log.Println(result)
	keyword = result
}

func displayCert(c *gin.Context) {
	dbAppoint, _ := gorm.Open("sqlite3", "db/appointment.db")
	defer dbAppoint.Close()
	dbUser, _ := gorm.Open("sqlite3", "db/user.db")
	defer dbUser.Close()
	dbVaccine, _ := gorm.Open("sqlite3", "db/vaccine.db")
	defer dbVaccine.Close()

	var appoint models.UserAppoint
	var user models.User
	var vaccine models.Vaccine

	dbAppoint.Where("code = ?", keyword).First(&appoint)
	log.Printf("Code is %d", keyword)
	dbVaccine.Where("id = ?", appoint.ID).First(&vaccine)
	dbUser.Where("email = ?", appoint.Email).First(&user)

	certificate := models.Cert{
		Email:      appoint.Email,
		Fname:      user.Fname,
		Lname:      user.Lname,
		Birthdate:  user.Birthdate,
		SSN:        user.SSN,
		Code:       appoint.Code,
		Name:       vaccine.Name,
		VaccineNum: vaccine.VaccineNum,
		State:      vaccine.State,
		ZipCode:    vaccine.ZipCode,
	}

	c.JSON(http.StatusOK, gin.H{"Great": &certificate})

}

func survey(c *gin.Context) {
	db, _ := gorm.Open("sqlite3", "db/survey.db")
	defer db.Close()
	db.AutoMigrate(&models.Survey{})
	var survey models.Survey
	err := c.ShouldBindJSON(&survey)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"message": "Bad Request"})
		return
	}

	log.Println(survey)
	db.Create(&survey)
}

func addVaccine(c *gin.Context) {
	db, _ := gorm.Open("sqlite3", "db/vaccine.db")
	defer db.Close()
	var vaccine models.VaccineStore

	err := c.ShouldBindJSON(&vaccine)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"message": "Bad Request"})
	}
	log.Println(vaccine)

	for i := 0; i < vaccine.Num; i++ {
		var count int
		db.Table("vaccines").Count(&count)
		count++
		vaccineStore := models.Vaccine{
			ID:         count,
			Name:       vaccine.Name,
			VaccineNum: vaccine.VaccineNum,
			State:      vaccine.State,
			ZipCode:    vaccine.ZipCode,
			Available:  vaccine.Available,
		}
		log.Println(vaccineStore)
		db.Create(&vaccineStore)
	}
}

func adminlogin(c *gin.Context) {
	db, _ := gorm.Open("sqlite3", "db/admin.db")
	defer db.Close()

	var user models.Admin
	log.Println(user)
	err := c.ShouldBindJSON(&user)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Not found!"})
		return
	}

	var findUser models.Admin
	db.Where("email = ?", user.Email).Take(&findUser)
	log.Println(findUser)
	var empty models.Admin
	log.Println(findUser.Email)

	if findUser == empty {
		c.JSON(http.StatusBadRequest, gin.H{"error": "User not found!"})
		log.Println("1")
		return
	}

	if err := bcrypt.CompareHashAndPassword([]byte(findUser.Password), []byte(user.Password)); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "User not found!"})
		return
	} else {

		claims := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.StandardClaims{
			Issuer:    user.Email,
			ExpiresAt: time.Now().Add(time.Hour * 24).Unix(),
		})

		token, _ := claims.SignedString([]byte(SecretKey))

		if err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": "could not log in!"})
			return
		} else {
			c.SetCookie("token", token, 3600, "/", "localhost", false, true)
			c.JSON(http.StatusOK, gin.H{"token": token})

		}
	}

}

func adminuser(c *gin.Context) {
	db, _ := gorm.Open("sqlite3", "db/admin.db")
	defer db.Close()
	cook, err := c.Cookie("token")
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
	tknStr := cook

	tkn, err := jwt.ParseWithClaims(tknStr, &jwt.StandardClaims{}, func(token *jwt.Token) (interface{}, error) {
		return []byte(SecretKey), nil
	})

	if err != nil {
		if err == jwt.ErrSignatureInvalid {
			c.JSON(http.StatusBadRequest, gin.H{"error": "could not log in!"})
			return
		}
		c.JSON(http.StatusBadRequest, gin.H{"error": "could not log in!"})
		return
	}

	claims := tkn.Claims.(*jwt.StandardClaims)
	var user models.Admin

	db.Where("email = ?", claims.Issuer).Take(&user)
	log.Println("123123123", user)
	i = claims.Issuer
	c.JSON(http.StatusOK, gin.H{"message": user})
}

//logout
func adminlogout(c *gin.Context) {
	i = "\"\""

	c.SetCookie("token", "", -1000, "/", "localhost", false, true)
	log.Println(i)
}

// func receiveFront(c *gin.Context) {

// 	body, err := ioutil.ReadAll(r.Body)
// 	if err != nil {
// 		panic(err)
// 	}

// 	if string(body) != "\"\"" {
// 		i = string(body)
// 		log.Println(i)
// 		log.Println("1")
// 	} else {
// 		app.errorJSON(w, errors.New("please sign in"))
// 	}
// }

// func searchResult(c *gin.Context) {
// 	db, _ := gorm.Open("sqlite3", "./vaccine.db")
// 	defer db.Close()

// 	var result models.SearchVaccine
// 	err := json.NewDecoder(r.Body).Decode(&result)
// 	if err != nil {
// 		app.errorJSON(w, err)
// 		return
// 	}

// 	var p1 []models.Vaccine
// 	db.Where("name = ?", results).Find(&p1)
// 	app.writeJSON(w, http.StatusOK, p1, "vaccines")
// 	log.Println(p1)

// }

// func (app *application) searchRecord(w http.ResponseWriter, r *http.Request) {
// 	db, _ := gorm.Open("sqlite3", "./vaccine.db")
// 	defer db.Close()

// 	var result models.SearchVaccine
// 	err := json.NewDecoder(r.Body).Decode(&result)
// 	if err != nil {
// 		app.errorJSON(w, err)
// 		return
// 	}

// 	results = result.Result

// }
