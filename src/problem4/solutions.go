func sum_to_n_a(n int) int {
	// * Implementation: Run a for loop to add all numbers up
	// ! Complexity: O(n)
	var sum = 0
	for i := 0; i < n+1; i++ {
		sum += i
	}
	return sum
}

func sum_to_n_b(n int) int {
	// your code here
	// * Implementation: Use recursion to add the previous number
	// ! Complexity: O(n)
	if n != 0 {
		return n + sum_to_n_b(n-1)
	} else {
		return n
	}
}

func sum_to_n_c(n int) int {
	// your code here
	// * Implementation: Add the first & last number and multiply by number of pairs
	// ! Complexity: O(1)
	var combo = n + 1
	var sum = combo * (n / 2)
	// if odd
	if n%2 != 0 {
		sum += n/2 + 1
	}
	return sum
}