
function calcular() {
    let data = new Date()
    let hora = data.getHours()
    let texto1 = document.getElementById('txth1')
    let texto2 = document.getElementById('txth2')
    let img = document.getElementById('imagem')

    if(hora > 5 && hora < 12) {
        texto1.innerHTML = 'Bom Dia'
        texto2.innerHTML = `Agora são ${hora} horas.`
        document.body.style.background = '#d6bf6f'
        
    }else if(hora > 11 && hora < 18) {
        texto1.innerHTML = `Boa Tarde`
        texto2.innerHTML = `Agora são ${hora} horas.`
        img.src = 'img/tarde-ed-t.jpg'
        document.body.style.background = '#F1CA74'
        
    }else{
        texto1.innerHTML = `Boa Noite`
        texto2.innerHTML = `Agora são ${hora} horas.`
        img.src = 'img/noite-ed-t.jpg'
        document.body.style.background = '#4E6971'
    }
}

