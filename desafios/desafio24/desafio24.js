let btn = document.getElementById('btn')
let btn2 = document.getElementById('btn2')
res = document.getElementById('res')

function verificar() {
    let n1 = document.getElementById('txtn1')
        n1 = Number(n1.value)
    let n2 = document.getElementById('txtn2')
        n2 = Number(n2.value)
        res = document.getElementById('res')
    if(n1 > n2) {
        res.innerHTML += ` O número ${n1} é maior que o número ${n2}.`
    }else{
        res.innerHTML += ` O número ${n1} é menor que o número ${n2}`
    }
}

function limpar() {
    res.innerHTML = 'Resposta: '
}

btn2.addEventListener('click', limpar)
btn.addEventListener('click', verificar)