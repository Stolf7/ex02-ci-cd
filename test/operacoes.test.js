const { soma, subtrai, multiplica, divide } = require('../js/operacoes');

test('soma de dois números', () => {
  expect(soma(2, 3)).toBe(5);
});

test('subtração de dois números', () => {
  expect(subtrai(5, 2)).toBe(3);
});

test('multiplicação de dois números', () => {
  expect(multiplica(3, 4)).toBe(12);
});

test('divisão de dois números', () => {
  expect(divide(10, 2)).toBe(5);
});

test('erro ao dividir por zero', () => {
  expect(() => divide(10, 0)).toThrow('Divisão por zero');
});