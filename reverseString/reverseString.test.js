const reverseString = require('./reverseString')

it('Works with word', () =>
  expect(reverseString('testing')).toBe('gnitset'))

it('Works with sentence', () => 
  expect(reverseString('Hello World')).toBe('dlroW olleH'))

it('Works with numbers', () =>
  expect(reverseString('21 guns')).toBe('snug 12'))