import fs from 'node:fs'

function generateBinaryData(jsonFile, binaryFile = './binary-data.txt') {
    const currents = JSON.parse(fs.readFileSync(jsonFile, 'utf-8'))
    let binary = []

    for (let index = 0; index < currents.length-1; index+=2) {
        const element = currents[index];
        const nextElement = currents[index + 1];

        binary.push(element > nextElement ? 0 : 1);
    }

    fs.writeFileSync(binaryFile, binary.join(''), 'utf8')
}

export default generateBinaryData