
let textoTitulo = "Pelé";
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



let texto1 = "Edson Arantes do Nascimento, conocido mundialmente como Pelé, nació en Brasil y es considerado uno de los mejores futbolistas de todos los tiempos. Desde muy pequeño mostró una conexión especial con el balón, jugando en las calles en condiciones humildes que ayudaron a desarrollar su creatividad y técnica.";

let texto2 = "Debutó profesionalmente con el Santos a una edad muy temprana, sorprendiendo al mundo por su talento. Rápidamente se convirtió en la figura principal del equipo, llevándolo a ganar títulos nacionales e internacionales y convirtiéndolo en uno de los clubes más conocidos del planeta.";

let texto3 = "Pelé no solo destacó en su club, sino también con la selección de Brasil, donde se convirtió en una pieza clave para marcar una era en el fútbol mundial.";

let texto4 = "Pelé es el único jugador en la historia en haber ganado tres Copas del Mundo (1958, 1962 y 1970), un récord que hasta hoy sigue siendo inigualable.";

let texto5 = "Durante su carrera anotó más de mil goles, convirtiéndose en uno de los máximos goleadores de todos los tiempos. Además, ganó múltiples campeonatos con el Santos y dejó una huella imborrable en el fútbol.";

let texto6 = "Uno de los momentos más recordados de Pelé fue su actuación en el Mundial de 1970, donde lideró a Brasil con un fútbol espectacular, lleno de técnica, creatividad y juego en equipo.";

let texto7 = "Sus goles, asistencias y liderazgo en ese torneo son considerados como uno de los puntos más altos en la historia del fútbol.";

let texto8 = "Pelé era un jugador extremadamente completo. Tenía velocidad, técnica, visión de juego, habilidad para driblar y una gran capacidad para definir frente al arco.";

let texto9 = "Podía jugar en varias posiciones ofensivas y siempre encontraba la manera de marcar la diferencia, ya fuera anotando goles o generando jugadas para sus compañeros.";

let texto10 = "Pelé es conocido como el 'Rey del fútbol' y su legado va más allá de los títulos. Fue uno de los jugadores que ayudó a popularizar el fútbol a nivel mundial, convirtiéndose en un símbolo del deporte.";

let texto11 = "Su influencia sigue presente hoy en día, inspirando a nuevas generaciones de futbolistas y aficionados alrededor del mundo.";



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