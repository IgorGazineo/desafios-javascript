let btn = document.getElementById('btn')

function verificar() {
    let n1 = Number(document.getElementById('txtn1').value)
    let n2 = Number(document.getElementById('txtn2').value)
    let n3 = Number(document.getElementById('txtn3').value)
    let res = document.getElementById('res')

    if (n1 < n2 && n1 < n3) {
        if (n2 < n3){
            res.innerText = `${n1}, ${n2}, ${n3}. `
        }else{
            res.innerText = `${n1}, ${n3}, ${n2}. `
        }
    }else if (n2 < n1 && n2 < n3) {
        if (n1 < n3) {
            res.innerText = `${n2}, ${n1}, ${n3}. `
        }else{
            res.innerText = `${n2}, ${n3}, ${n1}. `
        }
    }else if (n3 < n1 && n3 < n2) {
        if (n1 < n2) {
            res.innerText = `${n3}, ${n1}, ${n2}. `
        }else{
            res.innerText = `${n3}, ${n2}, ${n1}. `
        }
    }


}

btn.addEventListener('click', verificar)