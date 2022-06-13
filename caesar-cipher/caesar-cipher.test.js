const caesarCipher = require('./caesar-cipher')

test('testing caesar cipher encryption', () => {
  expect(caesarCipher("FREE PIZZA!")).toBe('SERR CVMMN!')
  expect(caesarCipher("FREE LOVE?")).toBe("SERR YBIR?")
  expect(caesarCipher('THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.')).toBe('GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.')
})