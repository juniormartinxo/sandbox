function verify() {
  var nome = window.document.getElementById('nome').value

  // descomenta quando criar os elementos
  /*
    var datenasc = window.document.getElementById('datenasc').value
    var cpf = window.document.getElementById('cpf').value
    var nomeveiculo = window.document.getElementById('nomeveiculo').value
    var precoveiculo = window.document.getElementById('precoveiculo').value
    var sexo = window.document.getElementById('sexo').value
    */

  localStorage.setItem('nome', nome)
  /*
    localStorage.setItem('datenasc', datenasc)
    localStorage.setItem('cpf', cpf)
    localStorage.setItem('nomeveiculo', nomeveiculo)
    localStorage.setItem('precoveiculo', precoveiculo)
    localStorage.setItem('sexo', sexo)
    */

  /* se quiser continuar pegar o valor
    let nomeLocalStorage = localStorage.getItem('nome')
    document.write(`<h1>${nomeLocalStorage }</h1>`)
    */

  // eu fari assim
  document.write(`<h1>${nome}</h1>`)
}

verify()
