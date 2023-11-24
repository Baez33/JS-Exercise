/* Declare una variable denominada challenge y asígnela a un valor inicial '30DaysOfJavaScript' */
let challenge = '30DaysOfJavaScript';

/* Imprima la cadena en la consola del navegador usando console.log() */
console.log(challenge);

/* Imprima la longitud de la cadena en la consola del navegador usando console.log() */
console.log(challenge.length);

/* Cambie todos los caracteres de la cadena a letras mayúsculas usando el método toUpperCase() */
let challengeEnMayusculas = challenge.toUpperCase();
console.log(challengeEnMayusculas);

/* Cambie todos los caracteres de la cadena a letras minúsculas usando el método toLowerCase() */
let challengeEnMinusculas = challenge.toLowerCase();
console.log(challengeEnMinusculas);

/* Corta (corta) la primera palabra de la cadena usando el método substr() o substring() */
let primeraPalabraSubstring = challenge.substring(0, challenge.indexOf(' '));
console.log(primeraPalabraSubstring);

/* Corta la frase 'DaysOfJavaScript' de '30DaysOfJavaScript'. */
let subcadenaSlice = challenge.slice(challenge.indexOf('Days'), challenge.length);
console.log(subcadenaSlice);

/* Comprueba si la cadena contiene la palabra "Script" usando el método includes() */
if (challenge.includes('Script')) {
  console.log('La cadena contiene la palabra "Script".');
} else {
  console.log('La cadena NO contiene la palabra "Script".');
}

/* Divide la cadena en un array usando el método split() */
let arrayDePalabras = challenge.split('');
console.log(arrayDePalabras);

/* Divide la cadena '30díasdeJavaScript' en el espacio usando el método split() */
let arrayDePalabrasEspacio = challenge.split(' ');
console.log(arrayDePalabrasEspacio);

/* 'Facebook,Google,Microsoft,Apple,IBM,Oracle,Amazon' divide la cadena por la coma y cambia a un array. */
let companies = 'Facebook,Google,Microsoft,Apple,IBM,Oracle,Amazon';
let arrayDeEmpresas = companies.split(',');
console.log(arrayDeEmpresas);

/* Cambia '30díasdeJavaScript' a '30díasdeNode' usando el método replace(). */
let challengeActualizado = challenge.replace('JavaScript', 'Node');
console.log(challengeActualizado);

/* ¿Cuál es el carácter en el índice 15 en la cadena '30DaysOfJavaScript'? Utilice el método charAt(). */
let caracterEnIndice15 = challenge.charAt(15);
console.log(caracterEnIndice15);

/* ¿Cuál es el código de carácter de 'J' en la cadena '30DaysOfJavaScript' usando charCodeAt()? */
let codigoDeCaracterJ = challenge.charCodeAt(challenge.indexOf('J'));
console.log(codigoDeCaracterJ);

/* Utilice indexOf para determinar la posición de la primera aparición de 'a' en '30DaysOfJavaScript' */
let posicionDeA = challenge.indexOf('a');
console.log(posicionDeA);

/* Utilice lastIndexOf para determinar la posición de la última aparición de 'a' en '30DaysOfJavaScript'. */
let ultimaPosicionDeA = challenge.lastIndexOf('a');
console.log(ultimaPosicionDeA);

/* Utilice indexOf para encontrar la posición de la primera aparición de la palabra 'porque' en la oración proporcionada. */
let oracion = 'No puedes terminar una oración con porque porque porque es una conjunción';
let posicionDePorque = oracion.indexOf('porque');
console.log(posicionDePorque);

/* Utilice trim() para eliminar cualquier espacio en blanco al principio y al final de una cadena. Por ejemplo, '30díasdeJavaScript'. */
let cadenaConEspacios = ' 30díasdeJavaScript ';
let cadenaSinEspacios = cadenaConEspacios.trim();
console.log(cadenaSinEspacios);

/* Utilice startsWith() con la cadena '30DaysOfJavaScript' y haga que el resultado sea verdadero. */
let resultadoStartsWith = challenge.startsWith('30Days');
console.log(resultadoStartsWith); // Devolverá true

/* Utilice endsWith() con la cadena '30díasdeJavaScript' y haga que el resultado sea verdadero. */
let resultadoEndsWith = challenge.endsWith('JavaScript');
console.log(resultadoEndsWith); // Devolverá true

/* Utilice el método match() para encontrar todas las letras 'a' en '30díasdeJavaScript'. */
let coincidencias = challenge.match(/a/g);
console.log(coincidencias);

/* Utilice concat() y combine '30díasde' y 'JavaScript' en una sola cadena, '30díasdeJavaScript'. */
let primeraParte = '30díasde';
let segundaParte = 'JavaScript';
let cadenaCombinada = primeraParte.concat(segundaParte);
console.log(cadenaCombinada);

/* Utilice el método repeat() para imprimir '30díasdeJavaScript' 2 veces. */
let cadenaRepetida = challenge.repeat(2);
console.log(cadenaRepetida);
