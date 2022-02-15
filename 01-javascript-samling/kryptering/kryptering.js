const alfabet = "abcdefghijklmnopqrstuvwxyzæøåABCDEFGHIJKLMNOPQRSTUVWXYZÆØÅ,.-_!?";

function krypter(bokstav, nokkel) {
    posisjon = alfabet.indexOf(bokstav);
    posisjonNy = posisjon + nokkel;
    
    if(posisjonNy >= alfabet.length){
        posisjonNy = posisjonNy - alfabet.length;
    }

    return alfabet[posisjonNy];
}

console.log(krypter("a",1));

let setning = "ABC";
let resultat = "";

for(let bokstav of setning) {
    console.log(bokstav);
    resultat += krypter(bokstav,1);
}

console.log("Kryptert melding: " + resultat);