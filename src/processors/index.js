// Processors
import { BLOOD_TYPE_B, CLAP, OK, TRUMPET } from "../constants/processors";

// Random number generator
const randInt = (lo, hi) => Math.round(Math.random() * hi) - lo;

// Replace every occurrence of b and B with the blood type b emoji
const processBloodTypeB = text => text.replace(/[bB]/g, "🅱️");

// Replace spaces with the clap emoji
const processClap = text => text.replace(/ +/g, "👏");

// Trim the text and prepend + append the trumpet emoji
const processTrumpet = text => `🎺${text.trim().split("").join(" ")}🎺`;

// Alternating upper and lower cases
const processOk = text => text.split("").map(c => (randInt(0, 1) % 2 || c === "i" ? c.toLowerCase() :
  c.toUpperCase())).join("");

const processText = processor => {
  switch (processor) {
    case BLOOD_TYPE_B:
      return processBloodTypeB;
    case TRUMPET:
      return processTrumpet;
    case CLAP:
      return processClap;
    case OK:
      return processOk;
    default:
      throw new Error("Processor does not exist!");
  }
};

export default processText;