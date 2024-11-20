import generateBinaryData from './currentDecoder.js'
import decodeBinaryData from "./binaryDecoder.js";

const jsonFile = './currents.json';
const binaryFile = './binary-data.txt';

generateBinaryData(jsonFile, binaryFile);
decodeBinaryData(binaryFile);
