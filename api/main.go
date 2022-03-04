package main

import (
	"flag"
	"fmt"
	"log"
	"net/http"
	"os"
	"time"

	"github.com/gin-gonic/gin"
)

type config struct {
	port int
	env  string
}

type AppStatus struct {
	Status      string `json:"status"`
	Environment string `json:"environment"`
	Version     string `json:"version"`
}

type application struct {
	config *config
	logger *log.Logger
	srv    *http.Server
}

func (app *application) start(port int) error {
	app.logger.Println("Starting server on port", app.config.port)
	if err := app.srv.ListenAndServe(); err != nil {
		return err
	}
	return nil
}

func Cors() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Add("Access-Control-Allow-Origin", "*")
		c.Next()
	}
}
func Config() *config {
	var cfg config
	flag.IntVar(&cfg.port, "port", 4000, "Server port to listen on")
	flag.StringVar(&cfg.env, "env", "development", "Application environment (development|production)")
	flag.Parse()
	return &cfg
}

func initApp(cfg *config) *application {
	logger := log.New(os.Stdout, "", log.Ldate|log.Ltime)
	app := application{
		config: cfg,
		logger: logger,
	}
	app.srv = &http.Server{
		Addr:         fmt.Sprintf(":%d", cfg.port),
		Handler:      app.routes(),
		IdleTimeout:  time.Minute,
		ReadTimeout:  10 * time.Second,
		WriteTimeout: 30 * time.Second,
	}
	return &app
}

func main() {
	cfg := Config()
	app := initApp(cfg)
	err := app.start(4000)
	if err != nil {
		log.Println(err)
	}
	//ma()
}

// func ma() {
// 	router := gin.Default()
// 	router.Use(cors.New(cors.Config{
// 		AllowOrigins:     []string{"https://foo.com"},
// 		AllowMethods:     []string{"PUT", "PATCH"},
// 		AllowHeaders:     []string{"Origin"},
// 		ExposeHeaders:    []string{"Content-Length"},
// 		AllowCredentials: true,
// 		AllowOriginFunc: func(origin string) bool {
// 			return origin == "https://github.com"
// 		},
// 		MaxAge: 12 * time.Hour,
// 	}))
// 	router.Run()
//}
