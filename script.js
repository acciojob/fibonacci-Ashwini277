function fibonacci(num) {
    // Handle the base cases
    if (num === 0) return 0;
    if (num === 1) return 0; // Since we need to return 0 for fibonacci(1) as per your examples

    let a = 0, b = 0, c = 1;
    
    // Iterate to find the nth Fibonacci number
    for (let i = 2; i <= num; i++) {
        a = b;
        b = c;
        c = a + b;
    }
    
    return b;
}

// Test cases
console.log(fibonacci(1));  // Output: 0
console.log(fibonacci(5));  // Output: 3
console.log(fibonacci(10)); // Output: 34
