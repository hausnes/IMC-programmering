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

document.getElementById("skjema").addEventListener("submit", krypterSetning);

function krypterSetning(evt) {
    evt.preventDefault();
   
    //let setning = "abc Jo Bjørnar Hausnes";
    let setning = document.getElementById("tekst").value;
    let kryptertSetning = "";

    for (let bokstav of setning) {
        kryptertSetning = kryptertSetning + krypterBokstav(bokstav,1);
    }

    console.log(kryptertSetning);
    document.getElementById("utskrift").innerHTML = kryptertSetning;
}

document.getElementById("knappDekrypter").addEventListener("click", dekrypterSetning);

function dekrypterSetning() {
    let setning = document.getElementById("tekst").value;
    let dekryptertSetning = "";

    for (let bokstav of setning) {
        dekryptertSetning = dekryptertSetning + dekrypterBokstav(bokstav,1);
    }

    console.log("Dekrypter setning køyrer!");
    document.getElementById("utskrift").innerHTML = "O_:_:_:_:_:_:_:_:_:_:_OWHEF";
    console.log("Dekryptert setning: " + dekryptertSetning);
    document.getElementById("utskrift").innerHTML = "Dekryptert setning " +  dekryptertSetning;
}

//console.log(dekrypterBokstav("å",1));
document.getElementById("utskrift").innerHTML = "OIHWEFWIOHEFWIOHEFUIOWHEF";