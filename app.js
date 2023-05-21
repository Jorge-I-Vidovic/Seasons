let formulario = document.getElementById('formulario');
let resultado = document.getElementById('resultado');
let boton = document.getElementById('boton');

boton.addEventListener('click', function () {
    let fechaValue = document.getElementById('fecha').value;
    let fecha = new Date(fechaValue);

    let dia = fecha.getDate();
    let mes = fecha.getMonth() + 1;
    let estacion;

    if (isNaN(fecha)) {
        resultado.innerHTML = "Escoje una fecha valida."
    } else {
        if ((mes === 12 && dia >= 21) || (mes >= 1 && mes < 3) || (mes === 3 && dia < 21)) {
            estacion = "Invierno";
        } else if ((mes === 3 && dia >= 21) || (mes > 3 && mes < 6) || (mes === 6 && dia < 21)) {
            estacion = "Primavera";
        } else if ((mes === 6 && dia >= 21) || (mes > 6 && mes < 9) || (mes === 9 && dia < 21)) {
            estacion = "Verano";
        } else {
            estacion = "Otoño";
        }

        resultado.innerHTML = 'La estación del año correspondiente a ' + fecha.toLocaleDateString() + ' es ' + estacion;
    }
});