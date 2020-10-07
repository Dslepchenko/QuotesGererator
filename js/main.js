'use strict';

const getRandomInRange = (min, max) => Math.floor(Math.random() * (max + 1 - min) + min);

const getRandomElementFromArr = (arr) => arr[getRandomInRange(0, arr.length - 1)];

const quoteWrapper = document.querySelector('.quote-wrapper');

const num = 5;

const getData = () => fetch(`https://thesimpsonsquoteapi.glitch.me/quotes?count=${num}`)
    .then(response => response.json())
    .then(data => data);


const createElement = (element, container) => {
    const template = document.createElement(`template`);
    template.innerHTML = element;
    container.appendChild(template.content);

};

const elementTepmlate = (card) => {
    debugger
    return `<div class = "quote-heading">

    ${(getQuotesTemplate(card.quote))}
    ${(getImageTemplate(card.image))}
    ${(getAuthorTemplate(card.character))}
    </div>`
}

const getQuotesTemplate = quote => `<div>${quote}</div>`;
const getImageTemplate = src => `<img src=${src} width="100px" height="100px">`
const getAuthorTemplate = character => `<h2>${character}</h2>`


const init = async() => {
    const data = await getData()
    let randomObject = getRandomElementFromArr(data);
    createElement(elementTepmlate(randomObject), quoteWrapper);

}

init();