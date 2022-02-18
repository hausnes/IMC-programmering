const alfabet = "abcdefghijklmnopqrstuvwxyzæøåABCDEFGHIJKLMNOPQRSTUVWXYZÆØÅ,.! ";

function krypterBokstav(bokstav,nokkel) { // bokstav = bokstaven som skal krypteres, key = hvor stor forskyvning
    let posisjon = alfabet.indexOf(bokstav);
    let posisjonNy = posisjon + nokkel;
    if(posisjonNy >= alfabet.length) {
        posisjonNy = posisjonNy - alfabet.length;
    }
    return alfabet[posisjonNy];
}

let setning = "Kryptering er gøy, assa!";
let kryptertSetning = "";

for (let bokstav of setning) {
    kryptertSetning = kryptertSetning + krypterBokstav(bokstav,1);
}

console.log(kryptertSetning);

/*
let tid = new Date();
console.log(tid.getDate());
*/

document.getElementById("skjema").addEventListener("submit", krypterSetning);

function krypterSetning(evt) {
    evt.preventDefault();
    console.log("SKJEMA FUNGERER!");
}