/* TITULO */

let textoTitulo = "Cristiano Ronaldo";
let i = 0;

function escribirTitulo(){

if(i < textoTitulo.length){

document.getElementById("titulo").innerHTML += textoTitulo.charAt(i);

i++;

setTimeout(escribirTitulo, 120);

}

}

escribirTitulo();


/* FUNCION PARA ESCRIBIR */

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


/* INFORMACION ORIGINAL */

let texto1 = "Cristiano Ronaldo dos Santos Aveiro nació en Madeira, Portugal, y desde muy joven destacó por su disciplina, su mentalidad competitiva y su enorme talento con el balón. Inició su carrera en el Sporting de Lisboa, donde rápidamente llamó la atención de grandes clubes europeos gracias a su velocidad y técnica.";

let texto2 = "Su salto al Manchester United marcó el inicio de su consolidación como estrella mundial. Bajo la dirección de Sir Alex Ferguson, Ronaldo evolucionó de ser un jugador habilidoso a convertirse en un futbolista completo, capaz de marcar, asistir y liderar dentro del campo.";

let texto3 = "Posteriormente, su fichaje por el Real Madrid lo llevó a otro nivel, donde se convirtió en el máximo goleador histórico del club y en una de las figuras más importantes de la historia del fútbol.";

let texto4 = "A lo largo de su carrera, Cristiano Ronaldo ha ganado múltiples títulos de liga en Inglaterra, España e Italia, además de varias Champions League, consolidándose como uno de los jugadores más exitosos del fútbol moderno.";

let texto5 = "En el ámbito individual, ha sido reconocido con varios Balones de Oro, premios que lo posicionan entre los mejores jugadores de todos los tiempos. También ha roto numerosos récords goleadores tanto en clubes como a nivel de selecciones.";

let texto6 = "Con la selección de Portugal, Cristiano Ronaldo ha sido el líder indiscutible durante muchos años. Su mayor logro fue conquistar la Eurocopa, siendo este el primer gran título internacional en la historia de su país.";

let texto7 = "Además, se ha convertido en uno de los máximos goleadores históricos del fútbol de selecciones, demostrando su capacidad para rendir al más alto nivel en cualquier competición.";

let texto8 = "Cristiano Ronaldo destaca por su impresionante físico, velocidad, potencia y capacidad de salto. Es un delantero muy completo, capaz de marcar con ambas piernas, de cabeza y desde cualquier posición del campo.";

let texto9 = "Su evolución a lo largo de los años le permitió pasar de ser un extremo habilidoso a un goleador letal, siempre manteniendo una mentalidad competitiva y una ética de trabajo ejemplar.";

let texto10 = "Cristiano Ronaldo es considerado uno de los mejores jugadores en la historia del fútbol. Su dedicación, disciplina y ambición lo han convertido en un ejemplo dentro y fuera del campo.";

let texto11 = "Más allá de sus títulos, su impacto en el deporte y su influencia en nuevas generaciones aseguran que su nombre permanecerá en la historia como una verdadera leyenda del fútbol.";


/* ANIMACIONES */

setTimeout(() => {

escribirTexto("historia1", texto1, 20, () => {

escribirTexto("historia2", texto2, 20, () => {

escribirTexto("historia3", texto3, 20, () => {

escribirTexto("logros1", texto4, 20, () => {

escribirTexto("logros2", texto5, 20, () => {

escribirTexto("seleccion1", texto6, 20, () => {

escribirTexto("seleccion2", texto7, 20, () => {

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