function deploying(){
    var anchor = document.getElementsByClassName("navbar-item");
    var anchor = document.getElementsByClassName("navbar-container");

    for(var i = 0; i < anchor.length; i++){ //vector con la cantidad de elementos del menú
        console.log("funciona?");
        anchor[i].classList.toggle("hide"); //mostrar los elementos del menú
    }

    //$('hide').toggle();
}