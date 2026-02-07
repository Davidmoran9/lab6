// Función para calcular el factorial de un número
function factorial(n) {
    // Validar que sea un número no negativo
    if (n < 0 || !Number.isInteger(n)) {
        return undefined;
    }
    
    if (n === 0 || n === 1) {
        return 1;
    }
    
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    
    return result;
}

// Función para calcular los números de Fibonacci hasta la posición n
function fibonacci(n) {
    // Validar que sea un número no negativo
    if (n < 0 || !Number.isInteger(n)) {
        return undefined;
    }
    
    if (n === 0) return 0;
    if (n === 1) return 1;
    
    let a = 0;
    let b = 1;
    let temp;
    
    for (let i = 2; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }
    
    return b;
}

// Función para calcular la potencia de un número
function power(base, exponent) {
    if (!Number.isFinite(base) || !Number.isFinite(exponent)) {
        return undefined;
    }
    
    return Math.pow(base, exponent);
}

// Función para calcular el máximo común divisor
function gcd(a, b) {
    // Validar que sean números enteros
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return undefined;
    }
    
    a = Math.abs(a);
    b = Math.abs(b);
    
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    
    return a;
}

module.exports = { factorial, fibonacci, power, gcd };