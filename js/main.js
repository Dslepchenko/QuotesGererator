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
const geLikeTemplate = card => `<div class="center">
<i id="like-${card.id}" class="fas fa-heart" type="button" onclick="toggleLike(${card.id})">
<span class="popover above"> I'm ${card.character}</span>
</i>
</div>`

const getSmileBox = icon => `<div class =""></div>`

const iconsData = [`heart`, `smile`, `angry`];


const toggleLike = (likeId) => {
    const needToLike = DATA.find(item => item.id === likeId)
    console.log(needToLike);
    needToLike.liked = !needToLike.liked;
    console.log(needToLike);
    const likeButton = document.getElementById(`like-${likeId}`);
    if (needToLike.liked) {
        likeButton.classList.add('active');
    } else {
        likeButton.classList.remove('active');
    }
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
        likes: iconsData,
        id: ++ID
    }));
    const result = DATA.map(card => elementTepmlate(card));

    createElement(result, quoteWrapper);
    console.log(DATA);


}

init();