let btn = document.getElementById('btn')

function preco() {
    let pizza = document.getElementById('txt1').value
    let res = document.getElementById('res')

    switch(pizza.toUpperCase()) {
        case 'CALABRESA':
            res.innerText += 'R$ 59,90'
            break
        case 'PORTUGUESA':
            res.innerText += 'R$ 69,90'
            break
        case 'MUÇARELA':
            res.innerText += 'R$ 45,90'
            break
        case 'NAPOLITANA':
            res.innerText += 'R$ 55,90'
            break
        default:
            res.innerText = 'Sabor não encontrado'
            break
      
    }
}

btn.addEventListener('click', preco)
