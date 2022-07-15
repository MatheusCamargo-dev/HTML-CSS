function SlideRaye(){
    document.getElementById('id').src='./img/Raye.jpg';
    var texto = document.querySelector("#text");
    texto.innerHTML = "Sky Striker Ace - Raye";
    setTimeout("SlideRoze()",1000)
}
    
function SlideRoze(){
    document.getElementById('id').src='./img/Roze.png';
    var texto = document.querySelector("#text");
    texto.innerHTML = "Sky Striker Ace - Roze";
    setTimeout("SlideKaina()",1000)
}

function SlideKaina(){
    document.getElementById('id').src='./img/Kaina.png';
    var texto = document.querySelector("#text");
    texto.innerHTML = "Sky Striker Ace - Kaina";
    setTimeout("SlideShizuku()",1000)
}

function SlideShizuku(){
    document.getElementById('id').src='./img/Shizuku.jpg';
    var texto = document.querySelector("#text");
    texto.innerHTML = "Sky Striker Ace - Shizuku";
    setTimeout("SlideKagari()",1000)
}
function SlideKagari(){
    document.getElementById('id').src='./img/Kagari.png';
    var texto = document.querySelector("#text");
    texto.innerHTML = "Sky Striker Ace - Kagari";
    setTimeout("SlideHayate()",1000)
}
function SlideHayate(){
    var texto = document.querySelector("#text");
    texto.innerHTML = "Sky Striker Ace - Hayate";
    document.getElementById('id').src='./img/Hayate.jpg';
    setTimeout("SlideRaye()",1000)
}