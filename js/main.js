// 'use strict';

// function getData() {
//     return fetch('https://thesimpsonsquoteapi.glitch.me/quotes?count=5')
//         .then((response) => {
//             return response.json();
//         })
//         .then((data) => {
//             return data;
//         });
// }



// var arr = [];

// async function init() {
//   arr = await getData();
// }

// init();


'use strict';

//Функция для выбора случайного значения 
function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}

// Функция для выбора случаного элемента массива
function getRandomElementFromArr(arr) {
    return arr[getRandomInRange(0, arr.length - 1)];
}

var quote = document.querySelector('.quote');
var author = document.querySelector('.author');
var image = document.querySelector('img');
var button = document.querySelector('#quote-btn');

function getData() {
    return fetch('https://thesimpsonsquoteapi.glitch.me/quotes?count=5')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            return data;
        });
}

async function init() {
    const data = await getData();
    var randomObject = getRandomElementFromArr(data);
    quote.innerText = '"' + randomObject.quote + '"';
    author.innerText = '-' + randomObject.character;
    image.src = randomObject.image;

}


button.addEventListener('click', function() {
    init();
});