package models

type Vaccine struct {
	ID         int    `json:"id"`
	Name       string `json:"vaccine_name"`
	VaccineNum int    `json:"vaccine_num"`
	State      string `json:"state"`
	ZipCode    int    `json:"zip_code"`
	Available  int    `json:"available"`
}

type User struct {
	Email     string `json:"email"`
	Password  string `json:"password"`
	Fname     string `json:"fName"`
	Lname     string `json:"lName"`
	Birthdate string `json:"birthDate"`
	SSN       int    `json:"SSN"`
}

type UserAppoint struct {
	Email string `json:"email"`
	ID    int    `json:"id"`
}

type SearchVaccine struct {
	Result string `json:"search"`
}
