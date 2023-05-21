let formulario = document.getElementById('formulario');
let resultado = document.getElementById('resultado');
let boton = document.getElementById('boton');

boton.addEventListener('click', function () {
    let fecha = document.getElementById('fecha').value;
    let fechaValue = new Date(fecha);

    let dia = fechaValue.getDay();
    let mes = fechaValue.getMonth() + 1;
    let estacion;

    if (isNaN(fechaValue)) {
        resultado.innerHTML = "Escoje una fecha valida."
    } else {
        if ((mes === 3 && dia >= 21) || mes > 3 && mes < 6 || (mes === 6 && dia < 21)) {
            estacion = "Primavera";
        } else if ((mes === 6 && dia >= 21) || mes > 6 && mes < 9 || (mes === 9 && dia < 21)) {
            estacion = "Verano";
        } else if ((mes === 9 && dia >= 21) || mes > 9 && mes < 12 || (mes === 12 && dia < 21)) {
            estacion = "Otoño";
        } else {
            estacion = "Invierno";
        }
        resultado.innerHTML = 'La estación del año correspondiente a ' + fechaValue.toLocaleDateString() + ' es ' + estacion;
    }
});