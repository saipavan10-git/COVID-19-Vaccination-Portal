package main

import (
	"testing"
)

//var app *application

func init() {
	app = initApp(&config{4000, "development"})
}
func Test2(t *testing.T) {
	getOneVacc, err := app.getOneVaccineProcess()
	if err != nil {
		t.Errorf(err.Error())
	}
	if getOneVacc == nil {
		t.Error("Error retrieving vaccine process")
	}
}

func Test3(t *testing.T) {
	allVaccine, err := app.getOneVaccineProcess()
	if err != nil {
		t.Errorf(err.Error())
	}
	if len(allVaccine) != 15 {
		t.Errorf("p5 length unexpected")
	}

}
