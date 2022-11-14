let btn = document.getElementById('btn')

function verificador(){
    let data = new Date()
    let ano = data.getFullYear()
    let nasc = document.getElementById('txtnumber').value
    let res = document.getElementById('res')
    let img = document.getElementById('fotos')


    if (nasc.length == 0 || Number(nasc) > ano){
        alert('Verifique os dados e tente novamente')
        res.innerText = 'Dados não válidos.'
    }else{
        let idade = ano - Number(nasc)
        let sexM = document.getElementById('masc')
        let sexF = document.getElementById('fem')


        if(sexM.checked){
            if(idade >= 0 && idade < 10){
                res.innerText = `Detectamos um homem de ${idade} anos`
                img.src = 'crianca-h(1).jpg'
            }else if(idade < 21){
                res.innerText = `Detectamos um homem de ${idade} anos`
                img.src = 'jovem-h(1).jpg'
            }else if(idade < 60){
                res.innerText = `Detectamos um homem de ${idade} anos`
                img.src = 'adulto-h(1).jpg'
            }else{
                res.innerText = `Detectamos um homem de ${idade} anos`
                img.src = 'idoso-h(1).jpg'
            }
           
        }else{
            if(idade >= 0 && idade < 10){
                res.innerText = `Detectamos uma mulher de ${idade} anos`
                img.src = 'crianca-m(1).jpg'
            }else if(idade < 21){
                res.innerText = `Detectamos uma mulher de ${idade} anos`
                img.src = 'jovem-m(1).jpg'
            }else if(idade < 60){
                res.innerText = `Detectamos uma mulher de ${idade} anos`
                img.src = 'adulto-m(1).jpg'
            }else{
                res.innerText = `Detectamos uma mulher de ${idade} anos`
                img.src = 'idoso-m(1).jpg'
            }
            
        }
    }

}

btn.addEventListener('click', verificador)