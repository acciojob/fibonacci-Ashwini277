function fibonacci(num) {
    if (num < 0) {
        throw new Error("Input must be a non-negative integer.");
    }

    if (num === 0) return 0;
    if (num === 1) return 1;

    let a = 0, b = 1;
    for (let i = 2; i <= num; i++) {
        let temp = a;
        a = b;
        b = temp + b;
    }
    return b;
}

// Test Cases
console.log(fibonacci(0)); // Output: 0 (Fibonacci(0))
console.log(fibonacci(1)); // Output: 1 (Fibonacci(1))
console.log(fibonacci(2)); // Output: 1 (Fibonacci(2))
console.log(fibonacci(3)); // Output: 2 (Fibonacci(3))
console.log(fibonacci(4)); // Output: 3 (Fibonacci(4))
console.log(fibonacci(5)); // Output: 5 (Fibonacci(5))
console.log(fibonacci(6)); // Output: 8 (Fibonacci(6))
console.log(fibonacci(10)); // Output: 55 (Fibonacci(10))
console.log(fibonacci(50)); // Output: 12586269025 (Fibonacci(50))
