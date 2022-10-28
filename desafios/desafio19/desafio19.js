alert('Você vai escolher as cores da letra e do fundo do site.')
confirm('Coloque valores iguais aos do CSS. Ex: red, blue, #202124, rgb(255, 110, 0)')
let corFundo = prompt('Digite a cor de fundo do site.')
let corLetra = prompt('Digite a cor da letra do site.')
document.getElementsByTagName('body')[0].style.background = corFundo
document.getElementsByClassName('color')[1].style.color = corLetra
document.getElementsByClassName('color')[2].style.color = corLetra
document.getElementsByClassName('color')[0].style.border = `1px solid ${corLetra}`
