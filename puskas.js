
let textoTitulo = "Ferenc Puskás";
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



let texto1 = "Ferenc Puskás nació en Hungría y es considerado uno de los delanteros más grandes en la historia del fútbol. Desde joven destacó por su talento ofensivo, especialmente por su potente disparo con la pierna izquierda y su gran capacidad goleadora.";

let texto2 = "Formó parte de la legendaria selección húngara conocida como el 'Equipo de Oro', uno de los equipos más dominantes de su época. Su nivel lo llevó a ser reconocido a nivel mundial como uno de los mejores jugadores.";

let texto3 = "Posteriormente, se unió al Real Madrid, donde vivió una etapa dorada, consolidándose como una figura clave en uno de los equipos más exitosos de la historia.";

let texto4 = "Puskás ganó múltiples títulos con el Real Madrid, incluyendo varias Copas de Europa, siendo protagonista en finales importantes donde marcó goles decisivos.";

let texto5 = "También fue uno de los máximos goleadores de su época, registrando cifras impresionantes tanto a nivel de clubes como de selección.";

let texto6 = "Participó en finales históricas del fútbol europeo, donde su capacidad goleadora marcó la diferencia en momentos clave.";

let texto7 = "Su participación en la selección de Hungría también dejó partidos memorables, donde su talento brilló frente a las mejores selecciones del mundo.";

let texto8 = "Puskás se caracterizaba por su potente disparo, precisión y gran inteligencia dentro del área. Era un delantero letal que aprovechaba cualquier oportunidad para marcar.";

let texto9 = "Su habilidad para posicionarse y definir lo convirtió en uno de los goleadores más efectivos en la historia del fútbol.";

let texto10 = "Ferenc Puskás es recordado como una leyenda del fútbol mundial y uno de los mejores goleadores de todos los tiempos.";

let texto11 = "Su nombre sigue siendo reconocido en el fútbol actual, y su legado continúa inspirando a delanteros en todo el mundo.";



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