const {
  largestThreeDigitPalindrome,
  isPalindromic3,
  isPalindromic2,
  isPalindromic
} = require('./largestPalindromeProduct.js');

it("evaluates 353 as palindromic", ()  => {
  expect(isPalindromic(345)).toBe(false);
  expect(isPalindromic2(345)).toBe(false);
  expect(isPalindromic3(345)).toBe(false);

  expect(isPalindromic(343)).toBe(true);
  expect(isPalindromic2(343)).toBe(true);
  expect(isPalindromic3(343)).toBe(true);
})

it("finds the largest three digit product palindrome, foo", () => {
  expect(largestThreeDigitPalindrome()).toBe(906609);
});
