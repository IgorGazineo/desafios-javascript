let btn = document.getElementById('btn')

function calcular() {
    let salario = document.getElementById('txtn1')
        salario = Number(salario.value)
    let internet = document.getElementById('txtn2')
        internet = Number(internet.value)
    let lazer = document.getElementById('txtn3')
        lazer = Number(lazer.value)
    let aguaLuz = document.getElementById('txtn4')
        aguaLuz = Number(aguaLuz.value)
    let transporte = document.getElementById('txtn5')
        transporte = Number(transporte.value)
    let res = document.getElementById('res')
    let saldo = salario - internet - lazer - aguaLuz - transporte

    if(saldo > 0) {
        res.innerHTML += ` Seu saldo de R$ ${saldo} é positivo.`
    }else{
        res.innerHTML += ` Seu saldo de R$ ${saldo} é negativo.`
    }
}

btn.addEventListener('click', calcular)