/*A palindromic number reads the same both ways. The largest palindrome made from the product of two 
2-digit numbers is 9009 = 91 × 99. Find the largest palindrome made from the product of two 3-digit 
numbers.*/

/*I wrote this function after reversing an array in place for an exercise in Marjin Haverbeke's "Eloquent 
Javascript." I eagerly recycled my code for this Project Euler. Afterward I realized it was unnecessary to reverse the array in 
place. So I wrote a new function. However, my original function still functions, so I left both of them 
here. Then we thought of an even better function that made use of the looping logic for reversing an array 
in place to simply check the string indexes. */
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

function isPalindromic2(num) {
    num = String(num);
    let reverseNum = "";
    for (let i = num.length - 1; i >= 0; i--) {
        reverseNum = reverseNum + num[i];
    };
    if (num != reverseNum) {
        return false;
    } else {
        return true;
    };
}

function isPalindromic3(num) {
    num = String(num);
    for (let i = 0; i < Math.floor(num.length/2); i++) {
        if (num[i] != num[num.length - 1 - i]) {
            return false;
        }
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

module.exports = {
  largestThreeDigitPalindrome,
  isPalindromic3,
  isPalindromic2,
  isPalindromic
};

