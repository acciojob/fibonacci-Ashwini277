function fibonacci(num) {
    // Check for edge cases
    if (typeof num !== 'number' || num < 0) {
        throw new Error("Input must be a non-negative integer.");
    }

    // Base cases
    if (num === 0) return 0;
    if (num === 1) return 1;

    let a = 0, b = 1;
    for (let i = 2; i <= num; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}

// Test Cases
console.log(fibonacci(0)); // Expected Output: 0
console.log(fibonacci(1)); // Expected Output: 1
console.log(fibonacci(2)); // Expected Output: 1
console.log(fibonacci(3)); // Expected Output: 2
console.log(fibonacci(4)); // Expected Output: 3
console.log(fibonacci(5)); // Expected Output: 5
console.log(fibonacci(6)); // Expected Output: 8
console.log(fibonacci(10)); // Expected Output: 55
console.log(fibonacci(50)); // Expected Output: 12586269025
