package models

type Vaccine struct {
	ID         int    `json:"id"`
	Name       string `json:"vaccine_name"`
	VaccineNum int    `json:"vaccine_num"`
	State      string `json:"state"`
	ZipCode    int    `json:"zip_code"`
}
