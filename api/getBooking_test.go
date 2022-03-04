package main

import (
	"testing"
)

//var app *application

func init() {
	app = initApp(&config{4000, "development"})
}
func Test4(t *testing.T) {
	getOneVacc, err := app.getOneVaccineProcess()
	if err != nil {
		t.Errorf(err.Error())
	}
	if getOneVacc == nil {
		t.Error("Error retrieving vaccine process")
	}
}

func Test5(t *testing.T) {
	allVaccine, err := app.getOneVaccineProcess()
	if err != nil {
		t.Errorf(err.Error())
	}
	//smodels.
	if len(allVaccine) != 15 {
		t.Errorf("p5 length unexpected")
	}

}
