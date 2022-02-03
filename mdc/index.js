function mdc(a, b) {
  const max = Math.max(a, b)
  const primes = primeNumbers(max)
  let result = []

  primes.map(prime => {
    let div_a = a / prime
    let div_b = b / prime

    if (isDivisible(a, prime) && isDivisible(b, prime)) {
      result.push(prime)
    }

    while (isDivisible(div_a, prime) || isDivisible(div_b, prime)) {
      if (isDivisible(div_a, prime) && isDivisible(div_b, prime)) {
        result.push(prime)
      }

      div_a = div_a / prime
      div_b = div_b / prime
    }
  })

  return result.reduce((acc, num) => acc * num)
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

console.log('mdc(12, 9)', mdc(12, 9)) // 3
console.log('mdc(21, 7)', mdc(21, 7)) // 7
console.log('mdc(258, 45)', mdc(258, 45)) // 3
console.log('mdc(1400, 752)', mdc(1400, 752)) // 8
