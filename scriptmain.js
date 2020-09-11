//ocultar/mostrar menú en la versión móvil
function deploying(){
    var menu = document.getElementsByClassName("navbar-container");

    //console.log("funciona?");
    menu[0].classList.toggle("hide");
}

//Botón para acortar links


function addlink(long_url, short_url){
    var texto = $('.shorter').val();
    

    if(texto === 'Shorter a link here...'){ //validar que en la caja de texto se haya escrito un link
        console.log("esto es una prueba");

        document.getElementsByClassName("hide2")[0].style.display = 'block';
        document.getElementsByClassName("shorter")[0].style.color = 'hsl(0, 73%, 89%)';
        document.getElementsByClassName("shorter")[0].style.border = '3px solid hsl(0, 87%, 67%)';


        //return false;
    } else{
        document.getElementsByClassName("hide2")[0].style.display = 'none';
        document.getElementsByClassName("shorter")[0].style.color = 'hsl(0, 3%, 69%)';
        document.getElementsByClassName("shorter")[0].style.border = '0px solid #ffffff';
        //const prueba = document.getElementByClassName("shorter")[0].value;

        long_url = document.getElementsByClassName("shorter")[0].value; //se toma el link ingresado en el texto
         //debugger
        fetch('https://rel.ink/api/links/', {
                method: 'POST',
                body: JSON.stringify({ //convierte el valor en una cadena de texto
                url: long_url          //mandamos el url original
            }),
            headers: {
                "Content-type": "application/json" //indica que tipo de contenido será retornado
            }
        })
        .then(response => {
            //debugger
            if(response.status<400) {
              return response.json();
            }
        }) 
        .then(response => {
            debugger
            //alert(response.hashid);
            short_url = response.hashid;
            return response.hashid;
        })

    }

}