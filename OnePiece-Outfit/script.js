
/* looping de funções para o slide do index.html*/
let count = 1;
document.getElementById("radio1").checked =  true;

setInterval( function(){
    nextImage();
},2000)

function nextImage(){
    count++;
    if (count>4){
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;
}

const input = document.querySelector('#email')
/* capturando o elemento input a partir do querySelector,
  metodo para captura de elementos a partir da sua tag seja class ou id
*/
input.addEventListener('keypress', function (event){
    if (event.key === "Enter"){
        window.alert('E-mail cadastrado!')
    }
});
/* 
 Adicionando um evento de keypress para o elemento input, função;
 Quando uma tecla for pressionado> Se a tecla pressionada for
 identica a tecla Enter > envie um alerta de 'Email cadastrado'
*/