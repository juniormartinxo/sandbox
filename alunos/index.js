var prompt = require('prompt')

var schema = {
  properties: {
    numAlunos: {
      pattern: /[0-9]+/,
      message: 'Somente números são aceitos',
      required: true,
      description: 'Quantos alunos?',
    },
  },
}

prompt.start()

let numAlunos_ = 0

prompt.get(schema, function (err, result) {
  numAlunos_ = result.numAlunos
})

console.log(numAlunos_)

/*
let arrNotas = []

for (n = 0; n < numAlunos; n++) {
  //const nome = prompt('Qual o nome do aluno?')
  //const nota = Number(prompt('Qual a nota?'))

  arrNotas.push({ nome: nome, nota: nota })
}

console.log(arrNotas)
*/
