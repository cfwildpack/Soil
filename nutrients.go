package main

import "fmt"

func calculateNutrients(n, p, k int) int {
	return n + p + k
}

func main() {
	total := calculateNutrients(40, 30, 20)
	fmt.Printf("Total nutrient index: %d\n", total)
}
