var tempo = new Date()
var hora = tempo.getHours()
var text = document.getElementById('texto')
var img = document.getElementById('img_dia')
function diasDaSemana(){
    if (hora < 16){
        text.innerHTML = `Agora são ${hora} horas`
        img.src = 'Raye.jpg'
    }
    else{
        text.innerHTML = 'Deu ruim'
        console.log(`horas ${hora}`)

    }
}
diasDaSemana()