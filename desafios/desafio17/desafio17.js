var n1 = Number(prompt('Digite sua nota da primeira unidade (ex: 7,5).').replace(',','.'))
var n2 = Number(prompt('Digite sua nota da segunda unidade (ex: 6,3).').replace(",","."))
var media = (n1 + n2)/2
var resultado = media >= 7 ? 'aprovado' : 'reprovado'
alert(`Você foi ${resultado} com média ${media.toFixed(2).replace('.',',')}. `)