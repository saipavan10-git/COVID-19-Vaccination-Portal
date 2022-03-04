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
	if len(allVaccine) != 8 {
		t.Errorf("p5 length unexpected")
	}

}

func Test1(t *testing.T) {
	allVaccine, err := app.getAllVaccinesProcess()
	if err != nil {
		t.Errorf(err.Error())
	}
	if len(allVaccine) != 8 {
		t.Errorf("p5 length unexpected")
	}

}
