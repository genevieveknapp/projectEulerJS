/*A palindromic number reads the same both ways. The largest palindrome made from the product of two 
2-digit numbers is 9009 = 91 × 99. Find the largest palindrome made from the product of two 3-digit 
numbers.*/

function isPalindromic(num) {
    num = String(num);
    let numArray = num.split("");
    let reverseNumArray = num.split("");
    let a;
    let b;
    for (let i = 0; i < Math.floor(reverseNumArray.length/2); i++){
        a = reverseNumArray[i];
        b = reverseNumArray[reverseNumArray.length - 1 - i]
        reverseNumArray[i] = b;
        reverseNumArray[reverseNumArray.length - 1 - i] = a;
    };
    for (let i = 0; i < numArray.length; i++) {
        if (numArray[i] != reverseNumArray[i]) return false;
        }
        return true;
}

function largestThreeDigitPalindrome() {
    let array = [];
    let maxNum = 0;
    for (let i = 100; i < 1000; i++) {
        for (let j = i; j < 1000; j++) {
        let num = i * j;
        if (isPalindromic(num)) array.push(num); 
        }    
    }
    let largest = Math.max.apply(Math, array);
    return largest;
}

console.log(largestThreeDigitPalindrome())