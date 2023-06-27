import {VOCAB_JSON} from '../data/vocabulary.js';
const VOCAB = JSON.parse(VOCAB_JSON);
const ENGLISH = document.querySelector(".text_or");
const RUSSIAN = document.querySelector(".text_tr");
const RUSSIAN_CARD = document.querySelector(".card-box_text__tr");
const NEXT_BUTTON = document.querySelector(".control-box_next");
const GOOGLE_SHEET_LINK = "https://script.google.com/macros/s/AKfycbzpjzhZoaH0FnsILt1Up1D7NfGh82pNN-U7VkZVzh8jcJpE1D-tt0gZH6xut6IrLQ9z/exec";
let GOOGLE_SHEET;

fetch(GOOGLE_SHEET_LINK)
  .then(resp => resp.json())
  .then(data => {
    GOOGLE_SHEET = data.result; 
    console.log(GOOGLE_SHEET);
    getRandomWord(GOOGLE_SHEET);
});


function getRandomInt(vocab) {
    let min = Math.ceil(0);
    let max = Math.floor(vocab.length + 1);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}
function getRandomWord(vocab) {
    let random = getRandomInt(vocab);
    ENGLISH.innerHTML = vocab[random][0];
    RUSSIAN.innerHTML = vocab[random][1];
}
function showWord() {
    RUSSIAN_CARD.style.color = '#000000';
}
function changeWord() {
    RUSSIAN_CARD.style.color = '#FFFFE0';
    getRandomWord(GOOGLE_SHEET);
}


RUSSIAN_CARD.addEventListener('click', () => showWord(GOOGLE_SHEET));
NEXT_BUTTON.addEventListener('click', () => changeWord());
// console.log(VOCAB);