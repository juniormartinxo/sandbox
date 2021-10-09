// Operador de curto circuito

// Operador &&
a1 = true && true // t && t returns true
a2 = true && false // t && f returns false
a3 = false && true // f && t returns false
a4 = false && 3 == 4 // f && f returns false
a5 = 'Cat' && 'Dog' // t && t returns "Dog"
a6 = false && 'Cat' // f && t returns false
a7 = 'Cat' && false // t && f returns false
a8 = '' && false // f && f returns ""
a9 = false && '' // f && f returns false

console.log('\n\nOperador &&')
console.log(a1, a2, a3, a4, a5, a6, a7, a8, a9)

// Operador ||
a1 = true || true // t && t returns true
a2 = true || false // t && f returns false
a3 = false || true // f && t returns false
a4 = false || 3 == 4 // f && f returns false
a5 = 'Cat' || 'Dog' // t && t returns "Dog"
a6 = false || 'Cat' // f && t returns false
a7 = 'Cat' || false // t && f returns false
a8 = '' || false // f && f returns ""
a9 = false || '' // f && f returns false

console.log('\n\nOperador ||')
console.log(a1, a2, a3, a4, a5, a6, a7, a8, a9, '\n\n')
