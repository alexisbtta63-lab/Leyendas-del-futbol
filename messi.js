
let textoTitulo = "Lionel Messi";
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


let texto1 = "Lionel Messi es considerado uno de los mejores futbolistas de todos los tiempos. Nació en Argentina y desde muy pequeño mostró un talento excepcional con el balón. A temprana edad se trasladó a España para unirse a las categorías inferiores del FC Barcelona, club donde desarrolló la mayor parte de su carrera.";

let texto2 = "En el Barcelona debutó profesionalmente y rápidamente se convirtió en la figura principal del equipo. Su estilo de juego, basado en la velocidad, el control del balón y la precisión, lo llevó a romper récords y marcar una época dorada en el club.";

let texto3 = "A lo largo de su carrera ha ganado múltiples títulos de liga, Champions League, Copas nacionales y supercopas. Ha sido reconocido en varias ocasiones como el mejor jugador del mundo, obteniendo múltiples Balones de Oro.";

let texto4 = "También ha sido el máximo goleador histórico del FC Barcelona y uno de los jugadores con más asistencias en la historia del fútbol, destacando por su capacidad tanto para anotar como para generar juego.";

let texto5 = "Con la selección argentina, Messi vivió momentos difíciles al inicio, pero con el tiempo logró consolidarse como líder del equipo. Ganó la Copa América, poniendo fin a una larga sequía de títulos para su país.";

let texto6 = "Posteriormente, logró consagrarse campeón del mundo, alcanzando el mayor logro en el fútbol y confirmando su lugar entre las máximas leyendas del deporte.";

let texto7 = "Messi destaca por su increíble habilidad con el balón, su capacidad para driblar a varios rivales, su visión de juego y su precisión en los pases y disparos. Es un jugador completo que puede marcar, asistir y liderar dentro del campo.";

let texto8 = "El legado de Lionel Messi va más allá de los títulos. Es un símbolo del fútbol moderno y una inspiración para millones de personas alrededor del mundo. Su humildad, constancia y talento lo han convertido en una verdadera leyenda del deporte.";


setTimeout(() => {

escribirTexto("historia1", texto1, 20, () => {

escribirTexto("historia2", texto2, 20, () => {

escribirTexto("logros1", texto3, 20, () => {

escribirTexto("logros2", texto4, 20, () => {

escribirTexto("seleccion1", texto5, 20, () => {

escribirTexto("seleccion2", texto6, 20, () => {

escribirTexto("estilo", texto7, 20, () => {

escribirTexto("legado", texto8, 20);

});

});

});

});

});

});

});

}, 1500);