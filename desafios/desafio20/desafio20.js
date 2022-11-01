let primeiro = document.getElementsByClassName('area')[0]
let segundo = document.getElementsByClassName('area')[1]
let terceiro = document.getElementsByClassName('area')[2]
primeiro.addEventListener('click', clicar1)
primeiro.addEventListener('mouseout', sair1)
segundo.addEventListener('click', clicar2)
segundo.addEventListener('mouseout', sair2)
terceiro.addEventListener('click', clicar3)
terceiro.addEventListener('mouseout', sair3)

function clicar1() {
    primeiro.style.background = 'red'
    primeiro.innerText = 'clicou'  
}

function sair1() {
    primeiro.style.background = 'white'
    primeiro.style.color = 'black'
    segundo.style.color = 'white'
    primeiro.innerText = 'area 1'
}

function clicar2() {
    primeiro.style.background = 'green'
    primeiro.style.color = 'white'
    segundo.style.color = 'black'
    segundo.innerText = 'clicou'

}

function sair2() {
    primeiro.style.background = 'white'
    segundo.innerText = 'area 2'
}

function clicar3() {
    primeiro.style.background = 'blue'
    segundo.style.background = 'red'
    terceiro.style.background = 'yellow'
    terceiro.innerText = 'clicou'
}

function sair3() {
    primeiro.style.background = 'white'
    segundo.style.background = 'white'
    terceiro.style.background = 'white'
    primeiro.style.color = 'black'
    terceiro.innerText = 'area 3'
}
