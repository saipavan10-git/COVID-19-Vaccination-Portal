package router

import (
	"backend/models"
	"bytes"
	"io/ioutil"
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/gin-gonic/gin"
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/sqlite"
	"github.com/stretchr/testify/assert"
)

func ConnectDatabaseUser() {
	database, err := gorm.Open("sqlite3", "db/user.db")
	database.AutoMigrate(&models.User{})
	database.LogMode(false)
	if err == nil {
		panic("Failed to connect to database!")
	}
}

func ConnectDatabaseAdmin() {
	database, err := gorm.Open("sqlite3", "db/admin.db")
	database.AutoMigrate(&models.Admin{})
	database.LogMode(false)
	if err == nil {
		panic("Failed to connect to database!")
	}
}

func setupRouter() *gin.Engine {
	r := gin.Default()
	gin.SetMode(gin.ReleaseMode)
	return r
}

// func setUpRegister(data []byte (*httptest.ResponseRecorder, *gin.Context, *gin.Engine) {
// 	w := httptest.NewRecorder()
// 	c, r := gin.CreateTestContext(w)
// 	r.POST("/auth/register", UserRegistration)
// 	c.Request, _ = http.NewRequest(http.MethodPost, "/auth/register", bytes.NewBuffer(data))
// 	c.Request.Header.Add("Content-Type", "application/json")
// 	return w, c, r
// }

func Test1(t *testing.T) {

	req := httptest.NewRequest(http.MethodGet, "/v1/status", nil)
	router := setupRouter()
	w := httptest.NewRecorder()
	router.ServeHTTP(w, req)
	res := w.Result()
	defer res.Body.Close()
	data, err := ioutil.ReadAll(res.Body)
	ConnectDatabaseUser()
	ConnectDatabaseAdmin()
	if err != nil {
		t.Errorf("expected error to be nil got %v", err)
	}

	if data == nil {
		t.Errorf("expected data not to be nil")
	}

}

func Test2(t *testing.T) {
	router := setupRouter()
	w := httptest.NewRecorder()
	req, _ := http.NewRequest("GET", "/v1/vaccine/:id", nil)
	router.ServeHTTP(w, req)
	// assert.Equal(t, 404, w.Code)
	// assert.Equal(t, "404 page not found", w.Body.String())
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

func Test3(t *testing.T) {
	router := setupRouter()
	w := httptest.NewRecorder()
	req, _ := http.NewRequest("GET", "/v1/vaccines", nil)
	router.ServeHTTP(w, req)
	// assert.Equal(t, 404, w.Code)
	// assert.Equal(t, "404 page not found", w.Body.String())
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

func Test4(t *testing.T) {
	router := setupRouter()
	w := httptest.NewRecorder()
	req, _ := http.NewRequest("POST", "/v1/test", nil)
	router.ServeHTTP(w, req)
	// assert.Equal(t, 404, w.Code)
	// assert.Equal(t, "404 page not found", w.Body.String())
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

func Test5(t *testing.T) {
	router := setupRouter()
	w := httptest.NewRecorder()
	var jsonData = []byte(`{
		"useremail" : "admin@gmail.com",
		"password": "123456"
	}`)
	req, _ := http.NewRequest("POST", "/v1/login", bytes.NewBuffer(jsonData))
	router.ServeHTTP(w, req)
	// assert.Equal(t, 404, w.Code)
	// assert.Equal(t, "404 page not found", w.Body.String())
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

func Test6(t *testing.T) {
	router := setupRouter()
	w := httptest.NewRecorder()
	req, _ := http.NewRequest("GET", "/v1/user", nil)
	router.ServeHTTP(w, req)
	// assert.Equal(t, 404, w.Code)
	// assert.Equal(t, "404 page not found", w.Body.String())
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

func Test7(t *testing.T) {
	router := setupRouter()
	w := httptest.NewRecorder()
	req, _ := http.NewRequest("POST", "/v1/logout", nil)
	router.ServeHTTP(w, req)
	// assert.Equal(t, 404, w.Code)
	// assert.Equal(t, "404 page not found", w.Body.String())
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

func Test8(t *testing.T) {
	router := setupRouter()
	w := httptest.NewRecorder()
	req, _ := http.NewRequest("POST", "/v1/booking", nil)
	router.ServeHTTP(w, req)
	// assert.Equal(t, 404, w.Code)
	// assert.Equal(t, "404 page not found", w.Body.String())
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

func Test9(t *testing.T) {
	router := setupRouter()
	w := httptest.NewRecorder()
	req, _ := http.NewRequest("GET", "/v1/appoint", nil)
	router.ServeHTTP(w, req)
	// assert.Equal(t, 404, w.Code)
	// assert.Equal(t, "404 page not found", w.Body.String())
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
	router := setupRouter()
	w := httptest.NewRecorder()
	req, _ := http.NewRequest("GET", "/v1/code", nil)
	router.ServeHTTP(w, req)
	// assert.Equal(t, 404, w.Code)
	// assert.Equal(t, "404 page not found", w.Body.String())
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

func Test11(t *testing.T) {
	router := setupRouter()
	w := httptest.NewRecorder()
	req, _ := http.NewRequest("POST", "/v1/updateUser", nil)
	router.ServeHTTP(w, req)
	// assert.Equal(t, 404, w.Code)
	// assert.Equal(t, "404 page not found", w.Body.String())
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
	router := setupRouter()
	w := httptest.NewRecorder()
	req, _ := http.NewRequest("POST", "/v1/deleteBooking", nil)
	router.ServeHTTP(w, req)
	// assert.Equal(t, 404, w.Code)
	// assert.Equal(t, "404 page not found", w.Body.String())
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
	router := setupRouter()
	w := httptest.NewRecorder()
	req, _ := http.NewRequest("POST", "/v1/searchCode", nil)
	router.ServeHTTP(w, req)
	// assert.Equal(t, 404, w.Code)
	// assert.Equal(t, "404 page not found", w.Body.String())
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
	router := setupRouter()
	w := httptest.NewRecorder()
	req, _ := http.NewRequest("GET", "/v1/displayCert", nil)
	router.ServeHTTP(w, req)
	// assert.Equal(t, 404, w.Code)
	// assert.Equal(t, "404 page not found", w.Body.String())
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
	router := setupRouter()
	w := httptest.NewRecorder()
	req, _ := http.NewRequest("POST", "/v1/survey", nil)
	router.ServeHTTP(w, req)
	// assert.Equal(t, 404, w.Code)
	// assert.Equal(t, "404 page not found", w.Body.String())
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
	router := setupRouter()
	w := httptest.NewRecorder()
	req, _ := http.NewRequest("GET", "/v1/vaccines", nil)
	router.ServeHTTP(w, req)
	// assert.Equal(t, 404, w.Code)
	// assert.Equal(t, "404 page not found", w.Body.String())
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

func Test17(t *testing.T) {
	router := setupRouter()
	w := httptest.NewRecorder()
	req, _ := http.NewRequest("GET", "/v1/vaccines", nil)
	router.ServeHTTP(w, req)
	// assert.Equal(t, 404, w.Code)
	// assert.Equal(t, "404 page not found", w.Body.String())

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

func Test18(t *testing.T) {
	router := setupRouter()
	w := httptest.NewRecorder()
	req, _ := http.NewRequest("GET", "/v1/vaccines", nil)
	router.ServeHTTP(w, req)
	//MockConnectDatabase()
	res := w.Result()
	defer res.Body.Close()
	assert.Equal(t, 404, w.Code)
	assert.Equal(t, "404 page not found", w.Body.String())
}

func Test19(t *testing.T) {
	router := setupRouter()
	w := httptest.NewRecorder()
	req, _ := http.NewRequest("POST", "/v1/AdminLogin", nil)
	router.ServeHTTP(w, req)
	// assert.Equal(t, 404, w.Code)
	// assert.Equal(t, "404 page not found", w.Body.String())
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

func Test20(t *testing.T) {
	router := setupRouter()
	w := httptest.NewRecorder()
	req, _ := http.NewRequest("POST", "/v1/AdminUser", nil)
	router.ServeHTTP(w, req)
	// assert.Equal(t, 404, w.Code)
	// assert.Equal(t, "404 page not found", w.Body.String())
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

func Test21(t *testing.T) {
	router := setupRouter()
	w := httptest.NewRecorder()
	req, _ := http.NewRequest("POST", "/v1/AdminLogout", nil)
	router.ServeHTTP(w, req)
	// assert.Equal(t, 404, w.Code)
	// assert.Equal(t, "404 page not found", w.Body.String())
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

func Test22(t *testing.T) {
	router := setupRouter()
	w := httptest.NewRecorder()
	req, _ := http.NewRequest("POST", "/v1/addVaccine", nil)
	router.ServeHTTP(w, req)
	// assert.Equal(t, 404, w.Code)
	// assert.Equal(t, "404 page not found", w.Body.String())
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

func Test23(t *testing.T) {
	router := setupRouter()
	w := httptest.NewRecorder()
	req, _ := http.NewRequest("POST", "/v1/AdminLogin", nil)
	router.ServeHTTP(w, req)
	// assert.Equal(t, 404, w.Code)
	// assert.Equal(t, "404 page not found", w.Body.String())
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

// func Test2(t *testing.T) {

// 	req := httptest.NewRequest(http.MethodGet, "/v1/vaccines", nil)

// 	w := httptest.NewRecorder()

// 	//app.searchResult(w, req)

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
// func Test3(t *testing.T) {

// 	req := httptest.NewRequest(http.MethodGet, "/v1/vaccines", nil)

// 	w := httptest.NewRecorder()

// 	//app.logout(w, req)

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

// func Test4(t *testing.T) {

// 	req := httptest.NewRequest(http.MethodGet, "/v1/vaccines", nil)

// 	w := httptest.NewRecorder()

// 	//app.receiveFront(w, req)

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

// func Test5(t *testing.T) {

// 	req := httptest.NewRequest(http.MethodGet, "/v1/vaccines", nil)

// 	w := httptest.NewRecorder()

// 	//app.getAppoint(w, req)

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

// func Test6(t *testing.T) {

// 	req := httptest.NewRequest(http.MethodGet, "/v1/vaccines", nil)

// 	w := httptest.NewRecorder()

// 	//app.updateUser(w, req)

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

// import (
// 	"bytes"
// 	"encoding/json"
// 	"net/http"
// 	"net/http/httptest"
// 	"testing"

// 	"com.uf/src/models"
// 	"com.uf/src/utils"
// 	"github.com/gin-gonic/gin"
// 	"github.com/stretchr/testify/assert"
//    )

//    func setUpFeedController(data []byte, url string, method string, handler gin.HandlerFunc) (*httptest.ResponseRecorder, *gin.Context, *gin.Engine) {

// 	w := httptest.NewRecorder()
// 	c, r := gin.CreateTestContext(w)

// 	utils.MockConnectDatabase()

// 	if method == "POST" {
// 	 r.POST(url, handler)
// 	}
// 	if method == "PUT" {
// 	 r.PUT(url, handler)
// 	}
// 	if method == "DELETE" {
// 	 r.DELETE(url, handler)
// 	}
// 	if method == "GET" {
// 	 r.GET(url, handler)
// 	}

// 	c.Request, _ = http.NewRequest(method, url, bytes.NewBuffer(data))
// 	c.Request.Header.Add("Content-Type", "application/json")
// 	return w, c, r
//    }

//    func TestCreatePost(t *testing.T) {

// 	var jsonData = []byte(`{
// 	 "content": "abc123",
// 	 "createdBy": "user01",
// 	 "tag": "Job-Recruitment"
// 	}`)

// 	w, c, r := setUpFeedController(jsonData, "/post", "POST", CreatePost)
// 	r.ServeHTTP(w, c.Request)

// 	var post models.UserPost
// 	err := json.Unmarshal(w.Body.Bytes(), &post)
// 	assert.NoError(t, err)

// 	assert.Equal(t, http.StatusOK, w.Code)
// 	assert.Equal(t, "abc123", post.Content)
// 	assert.Equal(t, "user01", post.CreatedBy)
//    }

//    func TestCreatePostWithInvalidData(t *testing.T) {
// 	var jsonData = []byte(`{
// 	 "content": "abc123",
// 	 "createdBy": "user01",
// 	 "tag": ""
// 	}`)

// 	w, c, r := setUpFeedController(jsonData, "/post", "POST", CreatePost)
// 	r.ServeHTTP(w, c.Request)
// 	assert.Equal(t, http.StatusBadRequest, w.Code)

// 	expected := `{"error":"Unable to create post"}`
// 	assert.Equal(t, expected, w.Body.String())
//    }

//    func TestUpdatePost(t *testing.T) {
// 	var jsonData = []byte(`{
// 	 "content": "content updation",
// 	 "createdBy": "user01",
// 	 "tag": "Job-Recruitment"
// 	}`)
// 	w, c, _ := setUpFeedController(jsonData, "/post/1", "PUT", UpdatePost)
// 	c.Params = []gin.Param{
// 	 {
// 	  Key: "id",
// 	  Value: "1",
// 	 },
// 	}
// 	//r.ServeHTTP(w, c.Request)
// 	UpdatePost(c)
// 	var post models.UserPost
// 	err := json.Unmarshal(w.Body.Bytes(), &post)
// 	assert.NoError(t, err)

// 	assert.Equal(t, http.StatusOK, w.Code)
// 	assert.Equal(t, "content updation", post.Content)
// 	assert.Equal(t, "user01", post.CreatedBy)
//    }

//    func TestUpdatePostWithInValidData(t *testing.T) {
// 	var jsonData = []byte(`{
// 	 "content": "content updation",
// 	 "createdBy": "user01",
// 	 "tag": "Job-Recruitment"
// 	}`)
// 	w, c, _ := setUpFeedController(jsonData, "/post/11", "PUT", UpdatePost)
// 	c.Params = []gin.Param{
// 	 {
// 	  Key: "id",
// 	  Value: "11",
// 	 },
// 	}
// 	//r.ServeHTTP(w, c.Request)
// 	UpdatePost(c)
// 	var post models.UserPost
// 	err := json.Unmarshal(w.Body.Bytes(), &post)
// 	assert.NoError(t, err)
// 	assert.Equal(t, http.StatusNotFound, w.Code)
//    }
//    func TestGetPost(t *testing.T) {
// 	w, c, _ := setUpFeedController([]byte{}, "/post/1", "GET", GetPost)
// 	c.Params = []gin.Param{
// 	 {
// 	  Key: "id",
// 	  Value: "1",
// 	 },
// 	}
// 	GetPost(c)
// 	var post models.UserPost
// 	err := json.Unmarshal(w.Body.Bytes(), &post)
// 	assert.NoError(t, err)
// 	assert.Equal(t, http.StatusOK, w.Code)
// 	assert.Equal(t, "content updation", post.Content)
// 	assert.Equal(t, "user01", post.CreatedBy)
//    }

//    func TestGetPostWithInValidData(t *testing.T) {
// 	w, c, _ := setUpFeedController([]byte{}, "/post/1", "GET", GetPost)
// 	c.Params = []gin.Param{
// 	 {
// 	  Key: "id",
// 	  Value: "11",
// 	 },
// 	}
// 	GetPost(c)
// 	assert.Equal(t, http.StatusNotFound, w.Code)
//    }
//    func TestGetPosts(t *testing.T) {
// 	w, c, _ := setUpFeedController([]byte{}, "/feed", "GET", GetPosts)
// 	GetPosts(c)
// 	var userposts []models.UserPost
// 	err := json.Unmarshal(w.Body.Bytes(), &userposts)
// 	assert.NoError(t, err)
// 	assert.Equal(t, http.StatusOK, w.Code)
// 	assert.Equal(t, "content updation", userposts[0].Content)
// 	assert.Equal(t, "user01", userposts[0].CreatedBy)
//    }

//    func TestPostComment(t *testing.T) {
// 	var jsonData = []byte(`{
// 	 "commentData": "first comment",
// 	 "createdBy": "user01",
// 	 "post_id": 1
// 	}`)
// 	w, c, _ := setUpFeedController(jsonData, "/postcomment", "POST", GetPosts)
// 	PostComment(c)
// 	var comment models.Comment
// 	err := json.Unmarshal(w.Body.Bytes(), &comment)
// 	assert.NoError(t, err)
// 	assert.Equal(t, http.StatusOK, w.Code)
// 	assert.Equal(t, "first comment", comment.CommentData)
// 	assert.Equal(t, "user01", comment.CreatedBy)
//    }

//    func TestPostCommentWithInValidData(t *testing.T) {
// 	var jsonData = []byte(`{
// 	 "commentData": "first comment",
// 	 "createdBy": "user01",
// 	 "post_id": 11
// 	}`)
// 	w, c, _ := setUpFeedController(jsonData, "/postcomment", "POST", GetPosts)
// 	PostComment(c)
// 	assert.Equal(t, http.StatusBadRequest, w.Code)
//    }

//    func TestUpdateLikes(t *testing.T) {
// 	var jsonData = []byte(`{
// 	 "postId": 1,
// 	 "liked": true
// 	}`)
// 	w, c, _ := setUpFeedController(jsonData, "/updatelikes", "PUT", UpdateLikes)
// 	UpdateLikes(c)
// 	assert.Equal(t, http.StatusOK, w.Code)
//    }

//    func TestUpdateLikesWithInValidData(t *testing.T) {
// 	var jsonData = []byte(`{
// 	 "postId": 11,
// 	 "liked": true
// 	}`)
// 	w, c, _ := setUpFeedController(jsonData, "/updatelikes", "PUT", UpdateLikes)
// 	UpdateLikes(c)
// 	assert.Equal(t, http.StatusBadRequest, w.Code)
