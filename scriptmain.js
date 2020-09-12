//ocultar/mostrar menú en la versión móvil
function deploying(){
    var menu = document.getElementsByClassName("navbar-container");

    //console.log("funciona?");
    menu[0].classList.toggle("hide");
}

//Botón para acortar links

function addlink(long_url, short_url){
    var texto = $('.shorter').val();
    var shortCount = 0;

    

    if(texto === ''){ //validar que en la caja de texto se haya escrito un link
        console.log("campo vacío");

        document.getElementsByClassName("hide2")[0].style.display = 'block';
        document.getElementsByClassName("shorter")[0].style.color = 'hsl(0, 73%, 89%)';
        document.getElementsByClassName("shorter")[0].style.border = '3px solid hsl(0, 87%, 67%)';


        //return false;
    } else{
        shortCount +=1;
        var totalShort = [shortCount];

        document.getElementsByClassName("hide2")[0].style.display = 'none';
        document.getElementsByClassName("shorter")[0].style.color = 'hsl(0, 3%, 69%)';
        document.getElementsByClassName("shorter")[0].style.border = '0px solid #ffffff';
        //const prueba = document.getElementByClassName("shorter")[0].value;

        long_url = document.getElementsByClassName("shorter")[0].value; //se toma el link ingresado en el texto
        document.getElementsByClassName("shorter")[0].value = "";
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
            //debugger
            //alert(response.hashid);
            short_url = response.hashid;
            document.getElementsByClassName("longUrl")[0].innerHTML = long_url;
            //document.getElementsByClassName("longUrl")[0].
            document.getElementsByClassName("shortUrl")[0].innerHTML = `https://rel.ink/${short_url}`;
        });

        for(var i=0; i<shortCount; i++){
            var shortBox = document.getElementsByClassName("url_shorted");
            shortBox[i].classList.toggle("hide_shorted");
            //totalShort[i] = shortBox[i]; 
            const newLocal = 'url_shorted';
            var original = document.getElementsByClassName(newLocal)[0]; 
            var clone = original.cloneNode(true); // "deep" clone 
            clone.id = "duplicater" + ++i; // there can only be one element with an ID 
            original.parentNode.appendChild(clone);
        }

    }
}

function copyLink(){
    var copyUrl = document.getElementsByClassName('shortUrl')[0];
    var selection = document.createRange();
    debugger
    selection.selectNodeContents(copyUrl);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(selection);
    var res = document.execCommand('copy');
    console.log(res);
    window.getSelection().removeRange(selection);
}