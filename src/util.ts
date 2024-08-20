

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomHex(length) {
    let hex = '';
    for (let i = 0; i < length; i++) {
        hex += Math.floor(Math.random() * 16).toString(16);
    }
    return hex;
}

export { getRandomInt, getRandomHex };