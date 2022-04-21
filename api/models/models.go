package models

type Vaccine struct {
	ID         int    `json:"id"`
	Name       string `json:"vaccine_name"`
	VaccineNum int    `json:"vaccine_num"`
	State      string `json:"state"`
	ZipCode    int    `json:"zip_code"`
	Available  int    `json:"available"`
}

type VaccineStore struct {
	Num        int    `json:"num"`
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
	Code  int    `json:"code"`
}

type SearchVaccine struct {
	Result string `json:"search"`
}

type Search struct {
	Value string `json:"search"`
}

type Cert struct {
	Email      string `json:"email"`
	Fname      string `json:"fName"`
	Lname      string `json:"lName"`
	Birthdate  string `json:"birthDate"`
	SSN        int    `json:"SSN"`
	Code       int    `json:"code"`
	Name       string `json:"vaccine_name"`
	VaccineNum int    `json:"vaccine_num"`
	State      string `json:"state"`
	ZipCode    int    `json:"zip_code"`
}

type Testing struct {
	Email string `json:"x"`
	Code  int    `json:"y"`
}

type Survey struct {
	A1  string `json:"answer1"`
	A2  string `json:"answer2"`
	A3  string `json:"answer3"`
	A4  string `json:"answer4"`
	A5  string `json:"answer5"`
	A6  string `json:"answer6"`
	A7  string `json:"answer7"`
	A8  string `json:"answer8"`
	A9  string `json:"answer9"`
	A10 string `json:"answer10"`
	A11 string `json:"answer11"`
	A12 string `json:"answer12"`
}

type Admin struct {
	Email    string `json:"email"`
	Password string `json:"password"`
	Fname    string `json:"fName"`
	Lname    string `json:"lName"`
}
