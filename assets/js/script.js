const precioLaptop = 800000;

let button = document.getElementById('total');

let calculo = document.getElementById('calculo');

button.addEventListener('click', hacerCalculo);

function hacerCalculo () {
    let cantidad =parseFloat (document.getElementById('cantidad').value);
    const precioLaptop = 800000;
    let total = cantidad * precioLaptop;
    calculo.innerHTML = `Precio: $${total}`;

    totalprecio.innerHTML= `Total:  $${total}`;
    totalcantidad.innerHTML=`Cantidad:  ${cantidad}`;
    function mostrar_imputs (){
        let colorImput = getElementById("colorImput");
        colorelegido.innerHTML= `Color:  ${colorImput}`;
    }
    colorelegido.innerHTML= `Color:  ${colorImput}`;

}






