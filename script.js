function clicou(){
    var escolha = document.getElementById("escolha");
    var titulo = document.getElementsByClassName("texto");
    var logo = document.getElementById("logo");
    var insta = document.getElementById("insta");
    var h1logo = document.getElementById("h1-logo")
    var body = document.body;
    if(escolha.style.justifyContent == "start"){
        escolha.style.justifyContent = "end";
        body.style.backgroundColor = "white";
        logo.style.borderRadius = "50%"
        insta.style.color = "black";
       for(var i = 0 ; i <titulo.length; i++){
        titulo[i].style.color = "black";
       }
        h1logo.style.color = "black";
    }else{
        // escolha.style.justifyContent = "start";
        // body.style.backgroundColor = "black";
        // insta.style.color = "white";
        // titulo.style.color = "white";
        // h1logo.style.color = "white";
        window.location.reload()
    } 
}