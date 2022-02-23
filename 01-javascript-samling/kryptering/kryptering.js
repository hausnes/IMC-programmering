const alfabet = "abcdefghijklmnopqrstuvwxyzæøåABCDEFGHIJKLMNOPQRSTUVWXYZÆØÅ,.! ";

function krypterBokstav(bokstav,nokkel) { // bokstav = bokstaven som skal krypteres, key = hvor stor forskyvning
    let posisjon = alfabet.indexOf(bokstav);
    let posisjonNy = posisjon + nokkel;
    if(posisjonNy >= alfabet.length) {
        posisjonNy = posisjonNy - alfabet.length;
    }
    return alfabet[posisjonNy];
}

function dekrypterBokstav(bokstav,nokkel) { // bokstav = bokstaven som skal krypteres, key = hvor stor forskyvning
    let posisjon = alfabet.indexOf(bokstav);
    let posisjonNy = posisjon - nokkel;
    if(posisjonNy < 0) {
        posisjonNy = posisjonNy + alfabet.length;
    }
    return alfabet[posisjonNy];
}

/*
let tid = new Date();
console.log(tid);
*/

document.getElementById("knappKrypter").addEventListener("click", krypterSetning);
//document.getElementById("tekst").addEventListener("input",krypterSetning);

function krypterSetning() {
    let setning = document.getElementById("tekst").value;
    let kryptertSetning = "";
    let krypteringsnokkel = parseInt(document.getElementById("krypteringsnokkel").value);
    console.log(krypteringsnokkel.length);

    /*
    if (krypteringsnokkel == 0) {
        alert("DETTE BLEI IKKJE GODT KRYPTERT, DUST!");
    } */
    if (isNaN(krypteringsnokkel)) {
        alert("Du må hugse å skrive inn kva krypteringsnøkkel du ynskjer!");
    }
    else {
        for (let bokstav of setning) {
            kryptertSetning = kryptertSetning + krypterBokstav(bokstav,krypteringsnokkel);
        }
    
        console.log("Krypter setning køyrer!");
        console.log("Kryptert setning: " + kryptertSetning);
        document.getElementById("utskrift").innerHTML = "Kryptert setning: " + kryptertSetning;
    }
}

document.getElementById("knappDekrypter").addEventListener("click", dekrypterSetning);

function dekrypterSetning() {
    let setning = document.getElementById("tekst").value;
    let dekryptertSetning = "";
    let krypteringsnokkel = parseInt(document.getElementById("krypteringsnokkel").value);

    if (isNaN(krypteringsnokkel)) {
        alert("Du må hugse å skrive inn kva krypteringsnøkkel du ynskjer!");
    }
    else {
        for (let bokstav of setning) {
            dekryptertSetning = dekryptertSetning + dekrypterBokstav(bokstav,krypteringsnokkel);
        }
    
        console.log("Dekrypter setning køyrer!");
        console.log("Dekryptert setning: " + dekryptertSetning);
        document.getElementById("utskrift").innerHTML = "Dekryptert setning " +  dekryptertSetning;
    }
}

//console.log(dekrypterBokstav("å",1));