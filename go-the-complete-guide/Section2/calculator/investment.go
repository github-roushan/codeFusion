package calculator

import "fmt"

func Greet() {
	fmt.Println("Hello from the Calculator package!")
}

func CalcSI(principal int, interest float32, time int) float32 {
	futureValue := (float32(principal) * interest * float32(time)) / 100.0
	return futureValue
}
