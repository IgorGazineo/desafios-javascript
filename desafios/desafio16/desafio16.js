var nome = prompt('Digite seu nome.')
var idade = Number(prompt(`Olá ${nome}. Digite sua idade. `))
var maioridade = idade > 15 ? "você já pode votar!":"você ainda não pode votar!"
alert(`Com ${idade} anos, ${maioridade}`)