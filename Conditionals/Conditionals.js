function verificarEdadConducir() {
    var edad = parseInt(prompt("Ingrese su edad:"));

    if (edad >= 18) {
        console.log('Tiene la edad suficiente para conducir.');
    } else {
        var añosFaltantes = 18 - edad;
        console.log(`Te faltan ${añosFaltantes} años para conducir.`);
    }
}

// Ejemplo de uso
verificarEdadConducir();

function compararEdades() {
    var myAge = 30;
    var yourAge = parseInt(prompt("Ingrese su edad:"));

    if (yourAge > myAge) {
        console.log(`Eres ${yourAge - myAge} años mayor que yo.`);
    } else if (yourAge < myAge) {
        console.log(`Eres ${myAge - yourAge} años menor que yo.`);
    } else {
        console.log('Tenemos la misma edad.');
    }
}

// Ejemplo de uso
compararEdades();

function compararAConB(a, b) {
    // Usando if...else
    if (a > b) {
        return 'a es mayor que b';
    } else {
        return 'a es menor que b';
    }

    // Usando operador ternario
    // return (a > b) ? 'a es mayor que b' : 'a es menor que b';
}

// Ejemplo de uso
console.log(compararAConB(5, 3));

function determinarTemporada(mes) {
    if (mes === 'Septiembre' || mes === 'Octubre' || mes === 'Noviembre') {
        return 'Otoño';
    } else if (mes === 'Diciembre' || mes === 'Enero' || mes === 'Febrero') {
        return 'Invierno';
    } else if (mes === 'Marzo' || mes === 'Abril' || mes === 'Mayo') {
        return 'Primavera';
    } else if (mes === 'Junio' || mes === 'Julio' || mes === 'Agosto') {
        return 'Verano';
    } else {
        return 'Mes no válido';
    }
}

// Ejemplo de uso
var mesUsuario = prompt("Ingrese un mes:");
var temporada = determinarTemporada(mesUsuario);
console.log(`La temporada para ${mesUsuario} es ${temporada}.`);

function calificarEstudiante(puntaje) {
    if (puntaje >= 80 && puntaje <= 100) {
        return 'A';
    } else if (puntaje >= 70 && puntaje < 80) {
        return 'B';
    } else if (puntaje >= 60 && puntaje < 70) {
        return 'C';
    } else if (puntaje >= 50 && puntaje < 60) {
        return 'D';
    } else if (puntaje >= 0 && puntaje < 50) {
        return 'F';
    } else {
        return 'Puntaje no válido';
    }
}

// Ejemplo de uso
var puntajeEstudiante = parseInt(prompt("Ingrese el puntaje del estudiante:"));
var calificacion = calificarEstudiante(puntajeEstudiante);
console.log(`La calificación del estudiante es: ${calificacion}`);
