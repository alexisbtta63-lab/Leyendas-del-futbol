let cards = document.querySelectorAll(".card");

cards.forEach((card, index) => {

setTimeout(() => {
card.classList.add("mostrar");
}, index * 400);

});