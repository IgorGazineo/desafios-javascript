confirm('Vamos calcular a porcentagem de um valor?')
valor = Number(prompt('Digite o valor total.'))
porcent = Number(prompt('Digite o valor da porcentagem.'))
valorPor = valor/100 * porcent
alert(`${porcent}% de ${valor} é: ${valorPor} `)