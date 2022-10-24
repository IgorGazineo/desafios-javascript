confirm('Vamos calcular o valor do frete do seu produto?')
alert('O frete é dividido entre produtos acima ou abaixo de 400 reais.')
var precoProduto = Number(prompt('Digite o valor do seu produto.'))
var frete = precoProduto > 400 ? 'Frete grátis.': 'R$ 50,00 reais.'
alert(`O valor do frete para produtos de ${precoProduto.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} reais é: ${frete}`)