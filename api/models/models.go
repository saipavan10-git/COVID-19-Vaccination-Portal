package models

type Vaccine struct {
	ID         int    `json:"id"`
	Name       string `json:"vaccine_name"`
	VaccineNum int    `json:"vaccine_num"`
	State      string `json:"state"`
	ZipCode    int    `json:"zip_code"`
}

type User struct {
	Email    string `json:"email"`
	Password string `json:"password"`
	Fname    string `json:"fName"`
	Lname    string `json:"lName"`
}

type SearchVaccine struct {
	Result string `json:"search"`
}
