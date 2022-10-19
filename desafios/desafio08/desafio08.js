confirm('Gostaria de calcular a média de suas notas?')
nome = prompt('Digite o seu nome.')
confirm(`Olá, ${nome}! Para notas com valores quebrados, use a vírgula. ex: 7,5 / 8,3 / 4,2.`)
n1 = Number(prompt('Digite sua primeira nota:').replace(',','.'))
n2 = Number(prompt('Digide sua segunda nota:').replace(',','.'))
n3 = Number(prompt('Digite sua terceira nota:').replace(',','.'))
media = (n1 + n2 + n3)/3
document.write(`<br>${nome}, a média das suas notas é de: ${media.toFixed(2).replace('.',',')} `)
