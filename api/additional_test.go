package main

import (
	"io/ioutil"
	"net/http"
	"net/http/httptest"
	"testing"
)

func Test11(t *testing.T) {

	req := httptest.NewRequest(http.MethodGet, "/v1/vaccines", nil)

	w := httptest.NewRecorder()

	app.searchRecord(w, req)

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

func Test12(t *testing.T) {

	req := httptest.NewRequest(http.MethodGet, "/v1/vaccines", nil)

	w := httptest.NewRecorder()

	app.searchResult(w, req)

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
func Test13(t *testing.T) {

	req := httptest.NewRequest(http.MethodGet, "/v1/vaccines", nil)

	w := httptest.NewRecorder()

	app.logout(w, req)

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

func Test14(t *testing.T) {

	req := httptest.NewRequest(http.MethodGet, "/v1/vaccines", nil)

	w := httptest.NewRecorder()

	app.receiveFront(w, req)

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

func Test15(t *testing.T) {

	req := httptest.NewRequest(http.MethodGet, "/v1/vaccines", nil)

	w := httptest.NewRecorder()

	app.getAppoint(w, req)

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

func Test16(t *testing.T) {

	req := httptest.NewRequest(http.MethodGet, "/v1/vaccines", nil)

	w := httptest.NewRecorder()

	app.updateUser(w, req)

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
