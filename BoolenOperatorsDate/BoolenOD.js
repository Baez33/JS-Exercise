// Declaración de variables
let firstName, lastName, country, city, age, isMarried, year;

// Asignación de valores
firstName = "John";
lastName = "Doe";
country = "USA";
city = "New York";
age = 30;
isMarried = false;
year = 2023;

// Verificación de tipos de datos con typeof
console.log(typeof firstName);  // string
console.log(typeof age);        // number
console.log(typeof isMarried);  // boolean

// Verificación de igualdad y tipo de '10'
console.log('10' === 10);       // false
console.log(typeof '10');       // string

// Verificación de igualdad y tipo de parseInt('9.8')
console.log(parseInt('9.8') === 10);  // false
console.log(typeof parseInt('9.8'));  // number

// Verificación de cualquier valor booleano (true o false)
let anyBooleanValue = true;
console.log(anyBooleanValue);    // true
console.log(typeof anyBooleanValue);  // boolean

// Declaraciones que proporcionan un valor verdadero
console.log(5 > 3);      // true
console.log('Hello');    // true
console.log(10 !== '10'); // true

// Declaraciones que proporcionan un valor falso
console.log(2 === '2');   // false
console.log(0 || false);  // false
console.log(!true);       // false

// i. 4 > 3
let result_i = 4 > 3;
console.log(result_i); // true

// ii. 4 >= 3
let result_ii = 4 >= 3;
console.log(result_ii); // true

// iii. 4 < 3
let result_iii = 4 < 3;
console.log(result_iii); // false

// iv. 4 <= 3
let result_iv = 4 <= 3;
console.log(result_iv); // false

// v. 4 == 4
let result_v = 4 == 4;
console.log(result_v); // true

// vi. 4 === 4
let result_vi = 4 === 4;
console.log(result_vi); // true

// vii. 4 != 4
let result_vii = 4 != 4;
console.log(result_vii); // false

// viii. 4 !== 4
let result_viii = 4 !== 4;
console.log(result_viii); // false

// ix. 4 != '4'
let result_ix = 4 != '4';
console.log(result_ix); // false

// x. 4 == '4'
let result_x = 4 == '4';
console.log(result_x); // true

// xi. 4 === '4'
let result_xi = 4 === '4';
console.log(result_xi); // false

// Obtener la fecha actual
let currentDate = new Date();

// Obtener el año actual
let currentYear = currentDate.getFullYear();

// Obtener el mes actual (0-11, donde 0 es enero y 11 es diciembre)
let currentMonth = currentDate.getMonth() + 1; // Sumamos 1 porque los meses van de 0 a 11

// Obtener el día del mes actual
let currentDayOfMonth = currentDate.getDate();

// Obtener el día de la semana actual (0-6, donde 0 es domingo y 6 es sábado)
let currentDayOfWeek = currentDate.getDay();

// Obtener la hora actual
let currentHour = currentDate.getHours();

// Obtener los minutos actuales
let currentMinutes = currentDate.getMinutes();

// Obtener los segundos actuales
let currentSeconds = currentDate.getSeconds();

// Obtener el número de segundos transcurridos desde el 1 de enero de 1970 hasta ahora
let secondsSince1970 = Math.floor(currentDate.getTime() / 1000);

// Mostrar los resultados
console.log("Año actual:", currentYear);
console.log("Mes actual:", currentMonth);
console.log("Fecha actual:", currentDayOfMonth);
console.log("Día de la semana actual:", currentDayOfWeek);
console.log("Hora actual:", currentHour);
console.log("Minutos actuales:", currentMinutes);
console.log("Segundos actuales:", currentSeconds);
console.log("Número de segundos desde 1970:", secondsSince1970);

// Solicitar al usuario que ingrese la base y la altura del triángulo
let base = prompt("Ingrese la base del triángulo:");
let altura = prompt("Ingrese la altura del triángulo:");

// Convertir las entradas a números
base = parseFloat(base);
altura = parseFloat(altura);

// Calcular el área del triángulo (área = 0.5 * base * altura)
let area = 0.5 * base * altura;

// Mostrar el resultado
console.log("El área del triángulo es:", area);

// Solicitar al usuario que ingrese los lados del triángulo
let ladoA = prompt("Ingrese el lado a del triángulo:");
let ladoB = prompt("Ingrese el lado b del triángulo:");
let ladoC = prompt("Ingrese el lado c del triángulo:");

// Convertir las entradas a números
ladoA = parseFloat(ladoA);
ladoB = parseFloat(ladoB);
ladoC = parseFloat(ladoC);

// Calcular el perímetro del triángulo (perímetro = ladoA + ladoB + ladoC)
let perimetro = ladoA + ladoB + ladoC;

// Mostrar el resultado
console.log("El perímetro del triángulo es:", perimetro);

