package main

import (
	"fmt"
	"github.com/jinzhu/gorm"
	"github.com/gin-gonic/gin"
	_ "github.com/jinzhu/gorm/dialects/sqlite"

)

var db *gorm.DB
var err error

type VaccineList struct {
	ID uint `json:"id"`
	State string `json:"state"`
	ZipCode int `json:"zipCode"`
	VaccineName string `json:"vaccineName"`
	VaccineDoseNum int `json:"doseNum"`
   }

func main() {
		//database
		db, err= gorm.Open("sqlite3", "./gorm.db")
		if err != nil {
			fmt.Println(err)
		  }

		defer db.Close()
		 
		db.AutoMigrate(&VaccineList{})
	
		//start server
		r := gin.Default()
		r.GET("/vaccine", GetAll)
		r.GET("/vaccine/:id", GetVaccineById)
		r.Run() 
}

	func GetAll(c *gin.Context) {
		var vaccinelist []VaccineList
		if err := db.Find(&vaccinelist).Error; err != nil {
		   c.AbortWithStatus(404)
		   fmt.Println(err)
		} else {
		   c.JSON(200, vaccinelist)
		}
	   }

	func GetVaccineById(c *gin.Context) {
		id := c.Params.ByName("id")
		var vaccineId []VaccineList
		if err := db.Where("id = ?", id).Find(&vaccineId).Error; err != nil {
		   c.AbortWithStatus(404)
		   fmt.Println(err)
		} else {
		   c.JSON(200, vaccineId)
		}
	   }