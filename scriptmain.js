//ocultar/mostrar menú en la versión móvil
function deploying(){
    var menu = document.getElementsByClassName("navbar-container");

    //console.log("funciona?");
    menu[0].classList.toggle("hide");
}


/*function boxText(){
    if(addlink==false){
        console.log("funciona?");
    }
}*/

//Botón para acortar links
function addlink(){
    var texto = $('.shorter').val();
    

    if(texto === 'Shorter a link here...'){ //validar que en la caja de texto se haya escrito un link
        console.log("esto es una prueba");

        document.getElementsByClassName("hide2")[0].style.display = 'block';
        document.getElementsByClassName("shorter")[0].style.color = 'hsl(0, 73%, 89%)';
        document.getElementsByClassName("shorter")[0].style.border = '3px solid hsl(0, 87%, 67%)';


        return false;
    } else{
        document.getElementsByClassName("hide2")[0].style.display = 'none';
        document.getElementsByClassName("shorter")[0].style.color = 'hsl(0, 3%, 69%)';
        document.getElementsByClassName("shorter")[0].style.border = '0px solid #ffffff';
        //const prueba = document.getElementByClassName("shorter")[0].value;

        var long_url = document.getElementsByClassName("shorter")[0].value; //se toma el link ingresado en el texto

        $.post( //mandamos el link
            "https://rel.ink/api/links/", 
            {
                url: long_url
            },function(){
                
            }
        );
    
        $.get( //recibimos el link acortado
            "https://rel.ink/api/links/Nn8y9p/", 
            { 
                hashid:"Nn8y9p",
                url: long_url,
                created_at:"2019-06-18T21:29:57.922801Z"
            },
            function(response)
            {
                alert('Shortened link is: ' + response.data.url);
            }
        );
    }
    //esto es sólo para probar


    /*var objeto = {
        nombre: 'API',
        num: 12,
        estado: true,
        subojeto: {
            subnombre: 'a',
            num: 19,
            estado: false
        }
    }

    console.log(objeto.subojeto);*/

}