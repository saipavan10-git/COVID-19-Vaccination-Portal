package main

import (
	"testing"
)

var app *application

func init() {
	app = initApp(&config{4000, "development"})
}
func Test(t *testing.T) {
	allVaccine, err := app.getAllVaccinesProcess()
	if err != nil {
		t.Errorf(err.Error())
	}
	if len(allVaccine) == 0 {
		t.Errorf("Number of records error")
	}

}

func Test1(t *testing.T) {
	allVaccine, err := app.getAllVaccinesProcess()
	if err != nil {
		t.Errorf(err.Error())
	}
	if len(allVaccine) < 10 {
		t.Errorf("Number of records error")
	}

}
