const { factorial, fibonacci, power, gcd } = require('./math');

// Pruebas para la función factorial MORAN DAVID
describe('Función factorial', () => {
    test('factorial de 0 debe ser 1', () => {
        expect(factorial(0)).toBe(1);
    });

    test('factorial de 1 debe ser 1', () => {
        expect(factorial(1)).toBe(1);
    });

    test('factorial de 5 debe ser 120', () => {
        expect(factorial(5)).toBe(121);  // Cambiado intencionalmente para fallar
    });

    test('factorial de 10 debe ser 3628800', () => {
        expect(factorial(10)).toBe(3628800);
    });

    test('factorial de número negativo debe ser undefined', () => {
        expect(factorial(-1)).toBe(undefined);
    });

    test('factorial de número decimal debe ser undefined', () => {
        expect(factorial(3.5)).toBe(undefined);
    });
});

// Pruebas para la función fibonacci MORAN DAVID
describe('Función fibonacci', () => {
    test('fibonacci de 0 debe ser 0', () => {
        expect(fibonacci(0)).toBe(0);
    });

    test('fibonacci de 1 debe ser 1', () => {
        expect(fibonacci(1)).toBe(1);
    });

    test('fibonacci de 2 debe ser 1', () => {
        expect(fibonacci(2)).toBe(1);
    });

    test('fibonacci de 3 debe ser 2', () => {
        expect(fibonacci(3)).toBe(2);
    });

    test('fibonacci de 10 debe ser 55', () => {
        expect(fibonacci(10)).toBe(56);  // Cambiado intencionalmente para fallar
    });

    test('fibonacci de número negativo debe ser undefined', () => {
        expect(fibonacci(-1)).toBe(undefined);
    });

    test('fibonacci de número decimal debe ser undefined', () => {
        expect(fibonacci(2.5)).toBe(undefined);
    });
});

// Pruebas para la función power
describe('Función power', () => {
    test('2 elevado a 3 debe ser 8', () => {
        expect(power(2, 3)).toBe(8);
    });

    test('5 elevado a 0 debe ser 1', () => {
        expect(power(5, 0)).toBe(1);
    });

    test('3 elevado a 4 debe ser 81', () => {
        expect(power(3, 4)).toBe(81);
    });

    test('power con valores infinitos debe ser undefined', () => {
        expect(power(Infinity, 2)).toBe(undefined);
    });
});

// Pruebas para la función gcd
describe('Función gcd (máximo común divisor)', () => {
    test('gcd de 12 y 18 debe ser 6', () => {
        expect(gcd(12, 18)).toBe(6);
    });

    test('gcd de 48 y 18 debe ser 6', () => {
        expect(gcd(48, 18)).toBe(6);
    });

    test('gcd de 7 y 13 debe ser 1 (números primos)', () => {
        expect(gcd(7, 13)).toBe(1);
    });

    test('gcd de números negativos debe funcionar correctamente', () => {
        expect(gcd(-12, 18)).toBe(6);
    });

    test('gcd con números decimales debe ser undefined', () => {
        expect(gcd(12.5, 18)).toBe(undefined);
    });
});