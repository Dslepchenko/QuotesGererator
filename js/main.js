'use strict';

const getRandomInRange = (min, max) => Math.floor(Math.random() * (max + 1 - min) + min);

const getRandomElementFromArr = (arr) => arr[getRandomInRange(0, arr.length - 1)];


const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const image = document.querySelector('img');
const button = document.querySelector('#quote-btn');

const getData = () => fetch('https://thesimpsonsquoteapi.glitch.me/quotes?count=5')
    .then(response => response.json())
    .then(data => data);

const init = async() => {
    const data = await getData()
    let randomObject = getRandomElementFromArr(data);
    quote.innerText = '"' + randomObject.quote + '"';
    author.innerText = '-' + randomObject.character;
    image.src = randomObject.image;
}


button.addEventListener('click', () => init());