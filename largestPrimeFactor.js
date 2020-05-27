/* The prime factors of 13195 are 5, 7, 13 and 29. What is the largest prime factor of the number 
600851475143? */

function isPrime(num) {
    for  (let i = 2; i < num; i++) {
       if (num % i == 0) return false;
   }
   return true;
}

console.log(isPrime(11))
console.log(isPrime(30))
console.log(isPrime(57))
console.log(isPrime(59))

function largestPrimeFactor(num) {
    let factors = [];
    let primeFactors = [];
    let maxTracker = 0;
    for (let i = 2; i < num; i++) {
        if (num % i == 0) factors.push(i)
    };
    for (let i = 0; i < factors.length; i++) {
        if (isPrime(factors[i])) primeFactors.push(factors[i])
    };
    for (let i = 0; i < primeFactors.length; i++) {
        if (primeFactors[i] > maxTracker) maxTracker = primeFactors[i]
    };
    return maxTracker;
}

console.log(largestPrimeFactor(600851475143))