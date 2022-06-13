const capitalize = require('./capitalize')

it('Capitalize word', () =>
  expect(capitalize('testing')).toBe('Testing'))

it('Capitalize sentence', () => 
  expect(capitalize('jest is best')).toBe('Jest is best'))

it('Works for when first character is a number', () =>
  expect(capitalize('21 guns')).toBe('21 guns'))