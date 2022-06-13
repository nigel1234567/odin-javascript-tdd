const calculator = require('./calculator')

it('Add', () =>
  expect(calculator.add(2, 2)).toBe(4))

it('Subtract', () =>
  expect(calculator.subtract(5, 2)).toBe(3))

it('Multiply', () =>
  expect(calculator.multiply(4, 2)).toBe(8))

it('Divide', () =>
  expect(calculator.divide(8, 2)).toBe(4))
