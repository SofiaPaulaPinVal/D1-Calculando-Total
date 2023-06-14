const precioLaptop = 800000;

let button = document.getElementById('total');

let calculo = document.getElementById('calculo');

let inputColor = document.getElementById('colorInput')

button.addEventListener('click', hacerCalculo);

function hacerCalculo () {
    let cantidad =parseFloat (document.getElementById('cantidad').value);
    const precioLaptop = 800000;
    let total = cantidad * precioLaptop;
    calculo.innerHTML = `Precio: $${total}`;

    totalprecio.innerHTML= `Total:  $${total}`;
    totalcantidad.innerHTML=`Cantidad:  ${cantidad}`;
    
}

inputColor.addEventListener('change', (event) =>{
    console.log(event.target.value);
    let divColorElegido = document.getElementById('colorelegido');
    divColorElegido.innerHTML += `<div style=""> Color: ${event.target.value}</div>`;
    divColorElegido.style.backgroundColor = event.target.value;
})







