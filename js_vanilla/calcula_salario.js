function calcularImposto(valor) {
  let imposto = 0
  let montante = 0
  let salario = valor

  if (salario > 2000 && salario <= 3000) {
    montante = salario - 2000
    imposto += montante * 0.08 + 10
  } else if (salario > 3000 && salario <= 4500) {
    montante = salario - 3000
    imposto += montante * 0.18 + 80
  } else if (salario > 4500) {
    montante = salario - 4500
    imposto = montante * 0.28 + 350
  }

  return imposto
}

let salario = 2001

let resultado = calcularImposto(salario)

console.log(resultado === 0 ? 'isento' : `R$ ${resultado.toFixed(2)}`)
