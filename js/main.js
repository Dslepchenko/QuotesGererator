'use strict';

const getRandomInRange = (min, max) => Math.floor(Math.random() * (max + 1 - min) + min);

const getRandomElementFromArr = (arr) => arr[getRandomInRange(0, arr.length - 1)];

const quoteWrapper = document.querySelector('.quote-wrapper');

const num = 7;

const getData = () => fetch(`https://thesimpsonsquoteapi.glitch.me/quotes?count=${num}`)
    .then(response => response.json())
    .then(data => data);


const createElement = (element, container) => {
    const template = document.createElement(`template`);
    template.innerHTML = element;
    container.appendChild(template.content);

};

const elementTepmlate = (card) => `<div class = "quote-heading hide">
    ${(getAuthorTemplate(card.character))}
    ${(getQuotesTemplate(card.quote))}
    ${(getImageTemplate(card.image))}
    
    </div>`


const getQuotesTemplate = quote => `<div class = "quote">${quote}</div>`;
const getImageTemplate = src => `<img src=${src} class = "image">`
const getAuthorTemplate = character => `<h2>${character}</h2>`

const getValue = () => {
    document.querySelector('#elastic').oninput = function() {
        let val = this.value.trim(); // убираем пробелы
        let elements = document.querySelectorAll('.quote-heading');
        let names = elements.querySelectorAll('h2');
        if (val !== '') {
            names.forEach(function(name) {
                if (name.innerText.search(val) == -1) {
                    this.parentNode.classList.add('hide')
                } else {
                    this.parentNode.classList.remove('hide')
                }
            });

        }
    }

}

const init = async() => {
    const data = await getData()
        // let randomObject = getRandomElementFromArr(data);
    const result = data.map(card => elementTepmlate(card));
    createElement(result, quoteWrapper);

}

init();
getValue();