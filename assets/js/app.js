import {
  allLetters as alphabet,
  allMorseCode as morseCodes,
} from "./alphabet.js";

// Dom
const $ = document;

// Elements
const plainTextElement = $.querySelector("#plain-text");
const cipherTextElement = $.querySelector("#cipher-text");
const morseLetterElement = $.querySelector("#morse-letter");
const audioElement = $.querySelector("audio");

// Variabels
let tap = 0;

// Timers
let tapTimer = null;
let whiteSpaceTimer = null;
let spaceTimer = null;

let morseLetter = "";
let text = "";
let cipherText = "";

// -------------Functions------------------
window.addEventListener("keydown", opratorSimulator);
window.addEventListener("keyup", pauseAudio);

// Main function
function opratorSimulator(e) {
  e.preventDefault();

  spaceTimer = timerBreak(spaceTimer, null);
  whiteSpaceTimer = timerBreak(whiteSpaceTimer, null);
  startWhiteSpaceTimer(1000);

  if (e.code === "Space") {
    audioElement.play();
    startSpaceTimer(1800);
    tap++;
    if (tap === 2) {
      stopTapTimer();
      updateMorseLetter("-");

      return;
    }
    startTapTimer(400);
  }
}

// Start timer functions
function startSpaceTimer(timeOut) {
  spaceTimer = setTimeout(() => {
    spaceTimer = timerBreak(spaceTimer, null);
    findMorseLetter();
    updateText(" ", " / ");
  }, timeOut);
}

function startWhiteSpaceTimer(timeout) {
  whiteSpaceTimer = setTimeout(() => {
    whiteSpaceTimer = timerBreak(whiteSpaceTimer, null);
    findMorseLetter();
  }, timeout);
}

function startTapTimer(timeOut) {
  if (tapTimer !== null) return;
  tapTimer = setTimeout(() => {
    updateMorseLetter(".");
    stopTapTimer();
  }, timeOut);
}

// Timer break functions
function timerBreak(timerName, result) {
  clearTimeout(timerName);
  return result;
}

function stopTapTimer() {
  tapTimer = timerBreak(tapTimer, null);
  tap = 0;
}

// End of timer functions

// Satrt morse letter functions
function findMorseLetter() {
  const letterIndex = morseCodes.indexOf(morseLetter);
  if (letterIndex === -1) {
    morseLetter = "";
    return;
  }
  const letter = alphabet[letterIndex];
  updateText(letter, morseLetter);
}

function updateMorseLetter(letter) {
  morseLetter += letter;
  morseLetterElement.innerHTML = morseLetter;
}

function resetMorseLetter() {
  morseLetter = "";
  cipherTextElement.innerHTML = cipherText;
  morseLetterElement.innerHTML = morseLetter;
}

// End of morse letter functions

function updateText(letter, morse) {
  text += letter;
  cipherText = `${cipherText} ${morse}`;
  plainTextElement.innerHTML = text;
  cipherTextElement.innerHTML = cipherText;
  resetMorseLetter();
}

function pauseAudio() {
  audioElement.pause();
  audioElement.load();
}
