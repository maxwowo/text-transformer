import {BLOOD_TYPE_B, HORN, CLAP, OK} from "../constants/processors";

// Replace every occurrence of b and B with the blood type b emoji
const processBloodTypeB = text => text.replace(/[bB]/g, "🅱️");

const processClap = text => text.replace(/ +/g, "👏");

const processHorn = text => text;

const processOk = text => text;

const process = (text, processor) => {
  switch (processor) {
    case BLOOD_TYPE_B: return processBloodTypeB(text);
    case HORN: return processHorn(text);
    case CLAP: return processClap(text);
    case OK: return processOk(text);
    default: return text;
  }
};

export default process;