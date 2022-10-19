confirm('Gostaria de calcular seu saldo do mês?')
salario = Number(prompt('Digite o valor do seu salário.'))
mercado = Number(prompt('Digite o valor gasto com mercado.'))
lazer = Number(prompt('Digite o valor gasto com lazer.'))
internet = Number(prompt('Digite o valor da sua conta de internet'))
luzAgua = Number(prompt('Digite o valor da sua conta de luz + conta de agua'))
saldoFim = salario - mercado - lazer - internet - luzAgua
saldoFim = saldoFim.toLocaleString('pt-BR',{style:'currency', currency:'BRL'})
document.write(`Seu saldo do mês é de: ${saldoFim}`)