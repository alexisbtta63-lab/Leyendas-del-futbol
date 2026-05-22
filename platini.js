
let textoTitulo = "Michel Platini";
let i = 0;

function escribirTitulo(){

if(i < textoTitulo.length){

document.getElementById("titulo").innerHTML += textoTitulo.charAt(i);

i++;

setTimeout(escribirTitulo, 120);

}

}

escribirTitulo();


/* FUNCION */

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


let texto1 = "Michel Platini nació en Francia y es considerado uno de los mediocampistas más talentosos y elegantes en la historia del fútbol. Desde joven destacó por su técnica, visión de juego y capacidad para controlar el ritmo de los partidos.";

let texto2 = "Su carrera profesional lo llevó a jugar en clubes importantes, siendo la Juventus el equipo donde alcanzó su mejor nivel. Ahí se convirtió en una figura clave, liderando al equipo y demostrando su calidad en competiciones europeas.";

let texto3 = "También fue una pieza fundamental en la selección de Francia, donde se consolidó como uno de los grandes referentes de su generación.";

let texto4 = "Platini ganó múltiples títulos con la Juventus, incluyendo competiciones europeas, y fue reconocido con varios premios individuales gracias a su rendimiento.";

let texto5 = "Además, tuvo un papel destacado con la selección francesa, logrando importantes victorias y dejando una huella en la historia del fútbol europeo.";

let texto6 = "Sus actuaciones con Francia marcaron una época, siendo protagonista en torneos donde su liderazgo y talento fueron determinantes.";

let texto7 = "También brilló en partidos importantes con la Juventus, donde su capacidad para marcar goles desde el mediocampo lo hacía único.";

let texto8 = "Platini se caracterizaba por su gran visión de juego, precisión en los pases y habilidad para generar oportunidades de gol.";

let texto9 = "Además, tenía una excelente capacidad para anotar, lo que lo convertía en un mediocampista muy completo.";

let texto10 = "Michel Platini es considerado uno de los mejores mediocampistas en la historia del fútbol y una figura importante en el desarrollo del fútbol europeo.";

let texto11 = "Su estilo de juego elegante y efectivo sigue siendo una referencia para las nuevas generaciones de futbolistas.";


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