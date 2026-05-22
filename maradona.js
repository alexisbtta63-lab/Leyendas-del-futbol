
let textoTitulo = "Diego Maradona";
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



let texto1 = "Diego Armando Maradona nació en Argentina y desde muy pequeño mostró un talento extraordinario para el fútbol. Creció en un entorno humilde, lo que fortaleció su carácter y su amor por el deporte. Desde joven destacó en equipos locales hasta llegar al fútbol profesional.";

let texto2 = "Su carrera lo llevó a jugar en clubes importantes como Boca Juniors, Barcelona y Napoli. Fue en el Napoli donde alcanzó su máximo nivel, convirtiéndose en ídolo absoluto y llevando al club a ganar títulos históricos que cambiaron su historia para siempre.";

let texto3 = "Maradona no solo fue un jugador talentoso, sino también un líder dentro del campo, capaz de motivar a su equipo y cambiar el rumbo de un partido con su habilidad.";

let texto4 = "Su mayor logro fue ganar la Copa del Mundo de 1986 con la selección de Argentina, donde fue el jugador más determinante del torneo.";

let texto5 = "Además, logró campeonatos importantes con el Napoli, consolidándose como uno de los jugadores más influyentes de su época.";

let texto6 = "Durante el Mundial de 1986, Maradona protagonizó uno de los momentos más recordados en la historia del fútbol, al marcar un gol recorriendo gran parte del campo y dejando atrás a varios rivales.";

let texto7 = "Ese torneo lo consagró como una leyenda, ya que su desempeño fue clave en cada partido, demostrando su talento y liderazgo.";

let texto8 = "Maradona se caracterizaba por su increíble control del balón, su capacidad de regate y su creatividad dentro del campo. Era un jugador capaz de inventar jugadas y sorprender a todos con su talento.";

let texto9 = "Su visión de juego le permitía asistir a sus compañeros y también marcar goles en momentos decisivos, siendo un jugador completo en ataque.";

let texto10 = "Diego Maradona es considerado una de las mayores leyendas del fútbol mundial. Su impacto en el deporte va más allá de los títulos, ya que su estilo y personalidad lo convirtieron en un ídolo para millones de personas.";

let texto11 = "Hasta el día de hoy, su nombre sigue siendo sinónimo de pasión, talento y grandeza en el fútbol.";


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