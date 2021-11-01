import prompt from 'prompt-sync'

let readline = prompt()

//let entrada = readline('Escolha uma opção: ')

while (entrada !== 4) {
  switch (entrada) {
    case 1:
      console.log('1')
      break
    case 2:
      console.log('2')
      break
    case 3:
      console.log('3')
      break
    default:
      break
  }

  entrada = +readline('Escolha uma opção: ')
}
