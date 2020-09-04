function deploying(){
    var anchor = document.getElementsByClassName("navbar-container");

    for(var i = 0; i < anchor.length; i++){
        console.log("funciona?");
        anchor[i].classList.toggle("hide"); //mostrar el menú
    }
}

function addlink(){
    var texto = $('.shorter').val();
    

    if(texto === 'Shorter a link here...'){
        //document.write("please add a link");
        console.log("esto es una prueba");

        document.getElementsByClassName("hide2").style.display="block";

        return false;
    }
}