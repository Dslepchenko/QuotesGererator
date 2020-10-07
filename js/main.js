'use strict';

function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}


function getRandomElementFromArr(arr) {
    return arr[getRandomInRange(0, arr.length - 1)];
}

let quote = document.querySelector('.quote');
let author = document.querySelector('.author');
let image = document.querySelector('img');
let button = document.querySelector('#quote-btn');

function getData() {
    return fetch('https://thesimpsonsquoteapi.glitch.me/quotes?count=5')
        .then(response => response.json())
        .then(data => data);
}
// покажи пожалуйста, что еще тут меняется...или лучше может созвониться?
async function init() {
    const data = await getData()
    let randomObject = getRandomElementFromArr(data);
    quote.innerText = '"' + randomObject.quote + '"';
    author.innerText = '-' + randomObject.character;
    image.src = randomObject.image;

}


button.addEventListener('click', function() {
    init();
});