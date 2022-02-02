function mdc(a, b) {
  const max = Math.max(a, b)
  const primes = primeNumbers(max)

  // Isto aqui ainda está errado
  return primes
    .filter(prime => {
      if (isDivisible(a, prime) && isDivisible(b, prime)) {
        return prime
      }
    })
    .reduce((acc, num) => acc * num)
}

function primeNumbers(num) {
  let numbers = []

  for (var i = 0; i <= num; i++) {
    if (isPrime(i)) {
      numbers.push(i)
    }
  }
  return numbers
}

function isPrime(num) {
  for (let i = 2; i < num; i++)
    if (num % i === 0) {
      return false
    }
  return num > 1
}

function isDivisible(a, b) {
  return a % b === 0 ? true : false
}

console.log('mdc', mdc(60, 120))
