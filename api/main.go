package main

import (
	"backend/router"

	"go.uber.org/dig"
)

func main() {
	c := dig.New()
	c.Invoke(router.RunServer)
}
