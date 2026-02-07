const sum = require('./sum');
const rest = require('./rest');
const div = require('./div');

// Pruebas para la función suma
describe('Función suma', () => {
    test('adds 1 + 2 debe ser 3', () => {
        expect(sum(1, 2)).toBe(3);
    });

    test('suma de números negativos: -5 + 3 debe ser -2', () => {
        expect(sum(-5, 3)).toBe(-2);
    });

    test('suma con cero: 10 + 0 debe ser 10', () => {
        expect(sum(10, 0)).toBe(10);
    });

    test('suma de números decimales: 2.5 + 3.7 debe ser 6.2', () => {
        expect(sum(2.5, 3.7)).toBeCloseTo(6.2);
    });

    test('suma de números grandes debe funcionar', () => {
        expect(sum(1000000, 2000000)).toBe(3000000);
    });
});

// Pruebas para la función resta
describe('Función resta', () => {
    test('resta 5 - 2 debe ser 3', () => {
        expect(rest(5, 2)).toBe(3);
    });

    test('resta con resultado negativo: 3 - 8 debe ser -5', () => {
        expect(rest(3, 8)).toBe(-5);
    });

    test('resta con cero: 15 - 0 debe ser 15', () => {
        expect(rest(15, 0)).toBe(15);
    });

    test('resta de números iguales: 7 - 7 debe ser 0', () => {
        expect(rest(7, 7)).toBe(0);
    });

    test('resta de números decimales: 8.5 - 3.2 debe ser 5.3', () => {
        expect(rest(8.5, 3.2)).toBeCloseTo(5.3);
    });
});

// Pruebas para la función división
describe('Función división', () => {
    test('divide 6 / 0 debe ser indefinido', () => {
        expect(div(6, 0)).toBe(undefined);
    });

    test('división normal: 10 / 2 debe ser 5', () => {
        expect(div(10, 2)).toBe(5);
    });

    test('división con decimales: 7 / 2 debe ser 3.5', () => {
        expect(div(7, 2)).toBe(3.5);
    });

    test('división de números negativos: -12 / 3 debe ser -4', () => {
        expect(div(-12, 3)).toBe(-4);
    });

    test('división que resulta en decimal: 1 / 3 debe ser aprox 0.333', () => {
        expect(div(1, 3)).toBeCloseTo(0.333, 3);
    });

    test('división de cero entre cualquier número: 0 / 5 debe ser 0', () => {
        expect(div(0, 5)).toBe(0);
    });
});