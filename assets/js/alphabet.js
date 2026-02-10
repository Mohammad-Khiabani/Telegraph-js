// English alphabet
const englishAlphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const puncations = [
  `&`, // Ampersand
  `'`, // Apostrophe
  `@`, // At sign
  `)`, // Bracket, close (parenthesis)
  `(`, // Bracket, open (parenthesis)
  `:`, // Colon
  `,`, // Comma
  `=`, // Equals sign
  `!`, // Exclamation markNot in ITU-R recommendation
  `.`, // Full-stop (period)
  `-`, // Hyphen
  `×`, // Multiplication sign (also x)
  `%`, // Percentage
  `+`, // Plus sign
  `"`, // Quotation marks
  `?`, // Question mark (query)
  `/`, // Slash
];

// Morse alphabet
export const morseCodeAlphabet = [
  ".-", //"A"
  "-...", //"B"
  "-.-.", //"C"
  "-..", //"D"
  ".", //"E"
  "..-.", //"F"
  "--.", //"G"
  "....", //"H"
  "..", //"I"
  ".---", //"J"
  "-.-", //"K"
  ".-..", //"L"
  "--", //"M"
  "-.", //"N"
  "---", //"O"
  ".--.", //"P"
  "--.-", //"Q"
  ".-.", //"R"
  "...", //"S"
  "-", //"T"
  "..-", //"U"
  "...-", //"V"
  ".--", //"W"
  ".--", //"X"
  "-.--", //"Y"
  "--..", //"Z"
];

const morseCodeDigits = [
  "-----", //0
  ".----", //1
  "..---", //2
  "...--", //3
  "....-", //4
  ".....", //5
  "-....", //6
  "--...", //7
  "---..", //8
  "----.", //9
];

const morseCodePuncations = [
  ".-...", // &
  ".----.", // '
  ".--.-.", // @
  "-.--.-", // )
  "-.--.", // (
  "---...", // :
  "--..--", // ,
  "-...-", // =
  "-.-.--", // !
  ".-.-.-", // .
  "-....-", // -
  "-..-", // ×
  "----- -..-. -----", // % (literally 0/0)
  ".-.-.", // +
  ".-..-.", // "
  "..--..", // ?
  "-..-.", // /
];

export const allLetters = [...englishAlphabet, ...digits, ...puncations];
export const allMorseCode = [
  ...morseCodeAlphabet,
  ...morseCodeDigits,
  ...morseCodePuncations,
];
