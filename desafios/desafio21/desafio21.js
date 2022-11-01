let txt1 = document.getElementById('txt1')
let txt2 = document.getElementById('txt2')
let txt3 = document.getElementById('txt3')
let txt4 = document.getElementById('txt4')

let txt5 = document.getElementById('txt5')
let txt6 = document.getElementById('txt6')
let txt7 = document.getElementById('txt7')
let txt8 = document.getElementById('txt8')
let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let btn3 = document.getElementById('btn3')
let btn4 = document.getElementById('btn4')
let btn5 = document.getElementById('btn5')
let res = document.getElementById('res')


function somar() {
    let n1Soma = Number(txt1.value)
    let n2Soma = Number(txt2.value)
    let soma = n1Soma + n2Soma
    res.innerText = `A soma entre ${n1Soma} e ${n2Soma} é ${soma}`
}
function subtrair() {
    let n1Sub = Number(txt3.value)
    let n2Sub = Number(txt4.value)
    let subtracao = n1Sub - n2Sub
    res.innerText = `A subtração entre ${n1Sub} e ${n2Sub} é ${subtracao}`
}
function dividir() {
    let n1Div = Number(txt5.value)
    let n2Div = Number(txt6.value)
    let divisao = n1Div / n2Div
    res.innerText = `A divisão entre ${n1Div} e ${n2Div} é ${divisao}`
}
function multiplicar() {
    let n1Mult = Number(txt7.value)
    let n2Mult = Number(txt8.value)
    let multiplicacao = n1Mult * n2Mult
    res.innerText = `A multiplicação entre ${n1Mult} e ${n2Mult} é ${multiplicacao}`
}
function limpar() {
    res.innerText = ''
}
btn1.addEventListener('click', somar)
btn2.addEventListener('click', subtrair)
btn3.addEventListener('click', dividir)
btn4.addEventListener('click', multiplicar)
btn5.addEventListener('click', limpar)
