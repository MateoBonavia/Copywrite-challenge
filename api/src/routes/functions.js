const axios = require("axios");

// ------------------------------------------------------------------------
// Funcion para revertir la palabra.
// ------------------------------------------------------------------------

const reverseWord = (text) => {
  try {
    let textReversed = text?.split("").reverse().join("");
    return textReversed;
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  reverseWord,
};
