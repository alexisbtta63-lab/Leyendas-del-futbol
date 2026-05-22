

let textoTitulo = "Ronaldo Nazario";
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




let texto1 = "Ronaldo Nazario, conocido como 'El Fenómeno', nació en Brasil y desde muy joven demostró ser uno de los delanteros más talentosos que el fútbol haya visto. Su velocidad, habilidad y capacidad goleadora lo hicieron destacar rápidamente en el fútbol profesional.";

let texto2 = "Inició su carrera en Brasil, pero pronto dio el salto a Europa, donde jugó en clubes como el PSV, Barcelona, Inter de Milán y Real Madrid. En cada uno de estos equipos dejó huella gracias a su increíble talento.";

let texto3 = "A lo largo de su carrera enfrentó graves lesiones que pusieron en riesgo su continuidad, pero su determinación y esfuerzo le permitieron regresar y seguir brillando en el fútbol mundial.";

let texto4 = "Ronaldo ganó dos Copas del Mundo con Brasil (1994 y 2002), siendo figura clave en el título del 2002 donde terminó como máximo goleador del torneo.";

let texto5 = "Además, fue reconocido varias veces como el mejor jugador del mundo y logró títulos importantes en los clubes donde jugó.";

let texto6 = "Su actuación en el Mundial de 2002 es uno de los momentos más recordados de su carrera, donde lideró a Brasil con goles decisivos en partidos importantes.";

let texto7 = "También dejó jugadas inolvidables en Europa, donde su velocidad y técnica superaban a las defensas rivales con facilidad.";

let texto8 = "Ronaldo se caracterizaba por su explosividad, velocidad y capacidad de regate. Era un delantero completo que podía crear sus propias oportunidades y definir con gran precisión.";

let texto9 = "Su habilidad para enfrentar a los defensores en el uno contra uno lo hacía prácticamente imparable en su mejor momento.";

let texto10 = "Ronaldo Nazario es considerado uno de los mejores delanteros en la historia del fútbol. Su talento natural y su capacidad de superar adversidades lo convirtieron en una leyenda.";

let texto11 = "Su estilo de juego ha inspirado a muchos jugadores y sigue siendo un referente en el fútbol mundial.";


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