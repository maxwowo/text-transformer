// Processors
import { BLOOD_TYPE_B, CLAP, OK, TRUMPET } from "../constants/processors";

// Random number generator
const randInt = (lo, hi) => Math.round(Math.random() * hi) - lo;

// Replace every occurrence of b and B with the blood type b emoji
const processBloodTypeB = text => !text.trim() ? "" : text.replace(/[bB]/g, "🅱️");

// Replace spaces with the clap emoji
const processClap = text => !text.trim() ? "" : text.replace(/ +/g, "👏");

// Trim the text and prepend + append the trumpet emoji
const processTrumpet = text => !text.trim() ? "" : `🎺${text.trim().split("").join(" ")}🎺`;

// Alternating upper and lower cases
const processOk = text => !text.trim() ? "" :
  text.split("").map(c => (randInt(0, 1) % 2 || c === 'i' ? c.toLowerCase() : c.toUpperCase())).join("");

const process = (text, processor) => {
  switch (processor) {
    case BLOOD_TYPE_B:
      return processBloodTypeB(text);
    case TRUMPET:
      return processTrumpet(text);
    case CLAP:
      return processClap(text);
    case OK:
      return processOk(text);
    default:
      return text;
  }
};

export default process;