const precioLaptop = 800000;

let button = document.getElementById('total');

let calculo = document.getElementById('calculo');

button.addEventListener('click', hacerCalculo);

function hacerCalculo () {
    let cantidad =parseFloat (document.getElementById('cantidad').value);
    const precioLaptop = 800000;
    let total = cantidad * precioLaptop;
    calculo.innerHTML = `Precio: $${total}`;
}

button.addEventListener('click', hacerCalculo);

function hacerCalculo (){
    let totalprecio = parseFloat (document.getElementById('total').value);
    let totalcantidad =parseFloat (document.getElementById('cantidad').value);
    let colorelegido =parseFloat (document.getElementById('color').value);

}

const form = document.querySelector('#formulario');
const crearResumen = (event) => {
    event.preventDefault();
    const total = document.getElementById ('#total').value;
    const cantidad = document.getElementById('#cantidad').value;
    const color =document.getElementById('#color').value;

    const resumen = document.getElementById ('resumen')
    totalprecio.textContent = `Precio: $${total}`;
    totalcantidad.textContent = `Cantidad: ${cantidad}`;
    colorelegido.textContent = `Color: ${color}`;

}




