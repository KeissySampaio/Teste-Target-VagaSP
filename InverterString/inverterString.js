function inverterString(str) {
    let novaString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        novaString += str[i];
    }
    return novaString;
}

const minhaString = "!tegraT, iO / Oi, Target!";
const resultado = inverterString(minhaString);
console.log(resultado);