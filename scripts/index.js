import {VOCAB_JSON} from '../data/vocabulary.js';
const VOCAB = JSON.parse(VOCAB_JSON);
const ENGLISH = document.querySelector(".text_or");
const RUSSIAN = document.querySelector(".text_tr");
const RUSSIAN_CARD = document.querySelector(".card-box_text__tr");
const NEXT_BUTTON = document.querySelector(".control-box_next");

function getRandomInt() {
    let min = Math.ceil(0);
    let max = Math.floor(VOCAB.length + 1);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}
function getRandomWord() {
    let random = getRandomInt();
    ENGLISH.innerHTML = VOCAB[random].english;
    RUSSIAN.innerHTML = VOCAB[random].russian;
}
function showWord() {
    RUSSIAN_CARD.style.color = '#000000';
}
function changeWord() {
    RUSSIAN_CARD.style.color = '#FFFFE0';
    getRandomWord();
}

getRandomWord();
RUSSIAN_CARD.addEventListener('click', () => showWord());
NEXT_BUTTON.addEventListener('click', () => changeWord());
console.log(VOCAB);