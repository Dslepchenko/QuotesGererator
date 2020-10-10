'use strict';

const quoteWrapper = document.querySelector('.quote-wrapper');

const num = 5;

const getData = () => fetch(`https://thesimpsonsquoteapi.glitch.me/quotes?count=${num}`)
    .then(response => response.json())
    .then(data => data);




let createElement = (elements, container) => {
    for (var i = 0; i < elements.length; i++) {
        let template = document.createElement(`template`)
        template.innerHTML = elements[i];
        container.appendChild(template.content);
    }
}








const elementTepmlate = (cards) => {
    let arr = [];
    cards.forEach(card => {

        `<div class = "quote-heading">
    ${(getAuthorTemplate(card[i].character))}
    ${(getQuotesTemplate(card[i].quote))}
    ${(getImageTemplate(card[i].image))}
    
    </div>`
        arr.push(card)
    });

    return arr;
}



const getQuotesTemplate = quote => `<div class = "quote">${quote}</div>`;
const getImageTemplate = src => `<img src=${src} class = "image">`
const getAuthorTemplate = character => `<h2>${character}</h2>`


const init = async() => {

    let data = await getData()
    createElement(elementTepmlate(data), quoteWrapper)



}

init();