package main

import (
	"io/ioutil"
	"net/http"
	"net/http/httptest"
	"testing"
)

//var app *application

func Test4(t *testing.T) {
	getOneVacc, err := app.getOneVaccineProcess()
	if err != nil {
		t.Errorf(err.Error())
	}
	if getOneVacc == nil {
		t.Error("Error retrieving vaccine process")
	}
}

// func Test5(t *testing.T) {
// 	allVaccine, err := app.getOneVaccineProcess()
// 	if err != nil {
// 		t.Errorf(err.Error())
// 	}
// 	//smodels.
// 	if len(allVaccine) != 15 {
// 		t.Errorf("p5 length unexpected")
// 	}

// }

// func Test6(t *testing.T) {
// 	req := httptest.NewRequest(http.MethodGet, "/v1/vaccines", nil)
// 	w := httptest.NewRecorder()
// 	app.getAllVaccines(w, req)
// 	res := w.Result()
// 	defer res.Body.Close()
// 	data, err := ioutil.ReadAll(res.Body)
// 	if err != nil {
// 		t.Errorf("expected error to be nil got %v", err)
// 	}
// 	if data == nil {
// 		t.Errorf("expected data not to be nil")
// 	}
// }

func Test7(t *testing.T) {
	req := httptest.NewRequest(http.MethodGet, "/v1/vaccines", nil)
	w := httptest.NewRecorder()
	app.getBooking(w, req)
	res := w.Result()
	defer res.Body.Close()
	data, err := ioutil.ReadAll(res.Body)
	if err != nil {
		t.Errorf("expected error to be nil got %v", err)
	}
	if data == nil {
		t.Errorf("expected data not to be nil")
	}
}

// func Test8(t *testing.T) {
// 	req := httptest.NewRequest(http.MethodGet, "/v1/vaccines", nil)
// 	w := httptest.NewRecorder()
// 	app.recordSignup(w, req)
// 	res := w.Result()
// 	defer res.Body.Close()
// 	data, err := ioutil.ReadAll(res.Body)
// 	if err != nil {
// 		t.Errorf("expected error to be nil got %v", err)
// 	}
// 	if data == nil {
// 		t.Errorf("expected data not to be nil")
// 	}
// }
func Test9(t *testing.T) {
	req := httptest.NewRequest(http.MethodGet, "/v1/vaccines", nil)
	w := httptest.NewRecorder()
	app.login(w, req)
	res := w.Result()
	defer res.Body.Close()
	data, err := ioutil.ReadAll(res.Body)
	if err != nil {
		t.Errorf("expected error to be nil got %v", err)
	}
	if data == nil {
		t.Errorf("expected data not to be nil")
	}
}

func Test10(t *testing.T) {
	req := httptest.NewRequest(http.MethodGet, "/v1/vaccines", nil)
	w := httptest.NewRecorder()
	app.user(w, req)
	res := w.Result()
	defer res.Body.Close()
	data, err := ioutil.ReadAll(res.Body)
	if err != nil {
		t.Errorf("expected error to be nil got %v", err)
	}
	if data == nil {
		t.Errorf("expected data not to be nil")
	}
}
