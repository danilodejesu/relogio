const horas = document.querySelector('#horas')
const minutos = document.querySelector('#minutos')
const segundos = document.querySelector('#segundos')
const ddia = document.querySelector('#dia')
const mes = document.querySelector('#mes')
const ano = document.querySelector('#ano')
const texto = document.querySelector('#texto')
const sol = document.querySelector('#sol')
const fundo = document.querySelector('body')


setInterval(relogio, 1000)

function relogio() {
    let dia = new Date()
    let hr = dia.getHours()
    let min = dia.getMinutes()
    let seg = dia.getSeconds()
    
    let d = dia.getDate()
    let m = dia.getMonth() + 1
    let y = dia.getFullYear()

    if (hr < 10) {
        hr = "0" + hr
    }

    if (min < 10) {
        min = "0" + min
    }

    if (seg < 10) {
        seg = "0" + seg
    }

    
    if (d < 10) {
        d="0"+d
    }

    if (m < 10) {
        m="0"+m
    }

    if (hr >= 5 && hr < 12) {
        fundo.className = 'manha'
        sol.src = '../imagem/tarde.png'
        texto.textContent = 'Bom Dia !'

    } else if (hr>= 12 && hr<18) {
        fundo.className = 'tarde'
        sol.src = '../imagem/tarde.png'
        texto.textContent = 'Boa Tarde !'
    } else {
        fundo.className = 'noite'
        sol.src= '../imagem/lua.png'
        texto.textContent = 'Boa Noite !'
    }

    horas.textContent = hr
    minutos.textContent = min
    segundos.textContent = seg

    ddia.textContent = d
    mes.textContent = m
    ano.textContent = y

}


