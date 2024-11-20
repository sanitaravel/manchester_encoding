import fs from 'node:fs';

function decodeBinaryData(filePath = './binary-data.txt') {
    const bitArray = fs.readFileSync(filePath, 'utf8');
    const byteArray = [];

    for (let i = 0; i < bitArray.length; i += 8) {
        byteArray.push(parseInt(bitArray.slice(i, i + 8), 2));
    }

    for (let i = 0; i < byteArray.length;) {
        const source = byteArray[i++];
        const destination = byteArray[i++];
        const length = byteArray[i++];
        const payload = byteArray.slice(i, i + length);
        const decodedPayload = Buffer.from(payload).toString('utf-8');
        console.log(source, destination, decodedPayload);
        i += length;
    }
}

export default decodeBinaryData
