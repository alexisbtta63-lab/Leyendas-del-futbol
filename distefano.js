

let textoTitulo = "Alfredo Di Stéfano";
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


let texto1 = "Alfredo Di Stéfano nació en Argentina y es considerado uno de los jugadores más completos en la historia del fútbol. Desde sus inicios destacó por su capacidad para jugar en diferentes posiciones dentro del campo, algo poco común en su época.";

let texto2 = "Su carrera lo llevó a varios clubes, pero fue en el Real Madrid donde alcanzó la grandeza, convirtiéndose en el líder de uno de los equipos más dominantes de la historia. Su presencia transformó al club en una potencia mundial.";

let texto3 = "Di Stéfano no era solo un delantero, sino un jugador total que participaba en todas las áreas del campo, ayudando tanto en defensa como en ataque.";

let texto4 = "Ganó múltiples títulos con el Real Madrid, incluyendo varias Copas de Europa consecutivas, siendo pieza clave en ese dominio histórico.";

let texto5 = "También recibió reconocimientos individuales por su impacto en el juego y su rendimiento constante.";

let texto6 = "Participó en finales históricas donde marcó goles importantes y lideró a su equipo en momentos decisivos. Su capacidad para aparecer en los partidos grandes lo convirtió en una figura única.";

let texto7 = "Fue protagonista en la época dorada del Real Madrid, dejando actuaciones memorables que marcaron la historia del club.";

let texto8 = "Di Stéfano se caracterizaba por su inteligencia, resistencia física y versatilidad. Podía recuperar balones, crear jugadas y finalizar acciones ofensivas con gran calidad.";

let texto9 = "Su forma de jugar influyó en el desarrollo del fútbol moderno, ya que rompía con los roles tradicionales de las posiciones.";

let texto10 = "Alfredo Di Stéfano es considerado una de las mayores leyendas del fútbol mundial y una figura clave en la historia del Real Madrid.";

let texto11 = "Su legado sigue presente como ejemplo de jugador completo, liderazgo y excelencia dentro del campo.";


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