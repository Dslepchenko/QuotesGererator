'use strict';



function getData() {
    fetch('https://thesimpsonsquoteapi.glitch.me/quotes?count=5')
        .then((response) => {
            return response.json();
        })
        .then((data) => {

            return data;

        });

}


var button = document.querySelector('#quote-btn');

button.addEventListener('click', function() {
    var arrData = getData();
    // console.log(arrData);

});
var arr = [];

function init() {
    arr = getData();

}
init();
console.log(arr);