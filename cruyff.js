
let textoTitulo = "Johan Cruyff";
let i = 0;

function escribirTitulo(){

if(i < textoTitulo.length){

document.getElementById("titulo").innerHTML += textoTitulo.charAt(i);

i++;

setTimeout(escribirTitulo, 120);

}

}

escribirTitulo();


function escribirTexto(id, texto, velocidad, callback){

let j = 0;

function escribir(){

if(j < texto.length){

document.getElementById(id).innerHTML += texto.charAt(j);

j++;

setTimeout(escribir, velocidad);

}
else if(callback){

callback();

}

}

escribir();

}


let texto1 = "Johan Cruyff nació en los Países Bajos y es considerado uno de los jugadores más influyentes en la historia del fútbol. Desde joven destacó no solo por su técnica, sino por su inteligencia, ya que entendía el juego de una manera adelantada a su época.";

let texto2 = "Se formó en el Ajax, donde se convirtió en la figura principal del equipo y desarrolló el 'fútbol total', un estilo revolucionario donde todos los jugadores participaban en todas las fases del juego.";

let texto3 = "Posteriormente jugó en el Barcelona, donde dejó una huella profunda y ayudó a cambiar la filosofía del club.";

let texto4 = "Ganó múltiples títulos con el Ajax, incluyendo Copas de Europa, y fue reconocido varias veces como el mejor jugador del mundo.";

let texto5 = "Más allá de los trofeos, su mayor logro fue revolucionar el fútbol moderno.";

let texto6 = "El 'Giro de Cruyff' es una de las jugadas más famosas de la historia, representando su creatividad y técnica.";

let texto7 = "También destacó en partidos clave donde su liderazgo y visión marcaron la diferencia.";

let texto8 = "Cruyff se caracterizaba por su inteligencia táctica, control del balón y visión. Era un jugador completo que podía crear, asistir y definir.";

let texto9 = "Su forma de jugar cambió la manera en que se entiende el fútbol.";

let texto10 = "Su legado sigue vivo en el fútbol actual, especialmente en equipos que aplican su filosofía de juego.";

let texto11 = "Es considerado una leyenda absoluta.";



setTimeout(() => {

escribirTexto("historia1", texto1, 20, () => {

escribirTexto("historia2", texto2, 20, () => {

escribirTexto("historia3", texto3, 20, () => {

escribirTexto("logros1", texto4, 20, () => {

escribirTexto("logros2", texto5, 20, () => {

escribirTexto("momentos1", texto6, 20, () => {

escribirTexto("momentos2", texto7, 20, () => {

escribirTexto("estilo1", texto8, 20, () => {

escribirTexto("estilo2", texto9, 20, () => {

escribirTexto("legado1", texto10, 20, () => {

escribirTexto("legado2", texto11, 20);

});

});

});

});

});

});

});

});

});

});

}, 1500);