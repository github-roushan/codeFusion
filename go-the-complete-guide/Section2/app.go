package main

import (
	"fmt"
	calculator "section2/first-app/calculator"
)

func main() {
	investment := 100
	result := calculator.CalcSI(investment, 8.5, 10)
	fmt.Printf("Your investment will become %v\n", result+float32(investment))
	fmt.Println("Please Organize your code in packages")
}
