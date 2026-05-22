

let textoTitulo = "Franz Beckenbauer";
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



let texto1 = "Franz Beckenbauer nació en Alemania y es considerado uno de los mejores defensores en la historia del fútbol. Desde joven destacó por su elegancia y su capacidad para leer el juego, lo que lo diferenciaba del resto de los jugadores de su posición.";

let texto2 = "Desarrolló la mayor parte de su carrera en el Bayern Múnich, donde se convirtió en líder del equipo y pieza fundamental en su éxito tanto a nivel nacional como internacional. También tuvo participación importante con la selección alemana.";

let texto3 = "Beckenbauer no solo defendía, sino que también iniciaba jugadas ofensivas, lo que cambió completamente la forma en que se entendía el rol de un defensor.";

let texto4 = "Ganó la Copa del Mundo con Alemania como jugador en 1974 y posteriormente como entrenador en 1990, logrando una hazaña muy difícil de igualar en el fútbol.";

let texto5 = "También consiguió múltiples títulos con el Bayern Múnich, incluyendo competiciones europeas, consolidándose como uno de los jugadores más exitosos de su época.";

let texto6 = "Uno de los momentos más recordados de su carrera fue su liderazgo en la Copa del Mundo de 1974, donde Alemania se coronó campeón.";

let texto7 = "Su capacidad para dirigir al equipo desde la defensa lo convirtió en una figura clave en los partidos más importantes.";

let texto8 = "Beckenbauer se caracterizaba por su elegancia, inteligencia y control del balón. Jugaba como líbero, una posición que él mismo ayudó a redefinir.";

let texto9 = "Tenía la capacidad de salir jugando desde la defensa, crear jugadas y aportar al ataque, algo que en su época no era común.";

let texto10 = "Franz Beckenbauer es considerado una leyenda del fútbol mundial y uno de los jugadores más influyentes en la evolución del juego.";

let texto11 = "Su estilo marcó el inicio de una nueva forma de jugar en defensa, inspirando a generaciones futuras de futbolistas.";



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