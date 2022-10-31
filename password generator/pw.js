const pw = document.getElementById("password");
const copy = document.getElementById("copy");
const len = document.getElementById("len");
const upper = document.getElementById("upper");
const lower = document.getElementById("lower");
const number = document.getElementById("number");
const symbol = document.getElementById("symbol");
const generate = document.getElementById("generate");

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=<>?/:.'";

function getUppercase() {
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function getLowercase() {
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function getNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbols() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword() {
    const length = len.value;

    let password = '';

    if (upper.checked) {
        password += getUppercase();
    }

    if (lower.checked) {
        password += getLowercase();
    }

    if (number.checked) {
        password += getNumber();
    }

    if (symbol.checked) {
        password += getSymbols();
    }

    for(let i = password.length; i < length; i++){
        const x = genrateX();
        password += x;
    }

    pw.innerText = password;
}

function genrateX() {
    const xs = [];

    if( upper.checked) {
        xs.push(getUppercase());
    }

    if( lower.checked) {
        xs.push(getLowercase());
    }

    if( number.checked) {
        xs.push(getNumber());
    }

    if( symbol.checked) {
        xs.push(getSymbols());
    }

    if(xs.length === 0){
        return "";
    }

    return xs[Math.floor(Math.random() * xs.length)];
}

generate.addEventListener("click", generatePassword) ;
// alert(getSymbols());

copy.addEventListener('click', () => {
    const textarea = document.createElement("textarea");

    const password = pw.innerText;

    if(!password) {
        return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("Password copied to the clipboard");
});



