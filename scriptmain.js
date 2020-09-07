//ocultar/mostrar menú en la versión móvil
function deploying(){
    var menu = document.getElementsByClassName("navbar-container");

    //console.log("funciona?");
    menu[0].classList.toggle("hide");
}

function boxText(){
    if(addlink==false){
        console.log("funciona??");
    }
}

//Botón para acortar links
function addlink(){
    var texto = $('.shorter').val();
    

    if(texto === 'Shorter a link here...'){ //validar que en la caja de texto se haya escrito un link
        //console.log("esto es una prueba");

        document.getElementsByClassName("hide2")[0].style.display = 'block';
        document.getElementsByClassName("shorter")[0].style.color = 'hsl(0, 73%, 89%)';
        document.getElementsByClassName("shorter")[0].style.border = '3px solid hsl(0, 87%, 67%)';

        return false;
    } else{
        document.getElementsByClassName("hide2")[0].style.display = 'none';
        document.getElementsByClassName("shorter")[0].style.color = 'hsl(0, 3%, 69%)';
        document.getElementsByClassName("shorter")[0].style.border = '0px solid #ffffff';
        const prueba = document.getElementByClassName("shorter")[0].value;
    }

}