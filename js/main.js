'use strict';

var DATA = [];

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
    ${(geLikeTemplate(card))}
   
    
    
    </div>`


const getQuotesTemplate = quote => `<div class = "quote">${quote}</div>`;
const getImageTemplate = src => `<img src=${src} class = "image">`
const getAuthorTemplate = character => `<h2>${character}</h2>`
    // const iconTemplate = card => `<div class="center">${card.iconsData.map(icon => getPopupTemplate(card,icon)).join('')}</div>`
const getPopupTemplate = (card, icon) => `<i id="like-${card.id}-${icon}" class="fas fa-${icon}" onclick="toggleSmile(${card.id}, '${icon}')"></i>`
const geLikeTemplate = card => `<button id="like-${card.id}" class="fas fa-heart${card.liked ? 'active' : ''}" type="button" onclick="toggleLike(${card.id})"><div class="center">${card.iconsData.map(icon => getPopupTemplate(card,icon)).join('')}</div></button>`

const iconsData = [`laugh-beam`, `smile`, `angry`];


// как заменить сердечко на олин из смайлов? добавить обработчик события?
const toggleSmile = (likeIcon) => {
    const hoverIcon = DATA.find(item => item.icon === likeIcon)
}

document.querySelector('#elastic').addEventListener('input', e => {
    e.preventDefault();
    const value = e.target.value;
    getFilteredCharacter(value, DATA);
    quoteWrapper.innerHTML = '';
    const newData = getFilteredCharacter(value, DATA);
    console.log(newData);
    const renderNew = newData.map(card => elementTepmlate(card));
    createElement(renderNew, quoteWrapper);



})

const getFilteredCharacter = (search, arr) => {
    const filterArray = arr.filter(obj => {
        const filter = obj.character.toLowerCase().indexOf(search.toLowerCase()) !== -1 || obj.quote.toLowerCase().indexOf(search.toLowerCase()) !== -1;

        return filter;
    })
    return filterArray;


}


const init = async() => {
    let ID = 0;
    const data = await getData();

    DATA = data.map(item => ({
        ...item,
        liked: false,
        iconsData: [`laugh-beam`, `smile`, `angry`],
        id: ++ID
    }));
    const result = DATA.map(card => elementTepmlate(card));

    createElement(result, quoteWrapper);
    console.log(DATA);


}

init();