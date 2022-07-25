let passordInn = document.getElementById("passordInn");

document.getElementById("sjekkPassord").addEventListener("click", sjekkPassord);

function sjekkPassord() {
    console.log(passordInn.value);
    for(let bokstav of passordInn.value) {
        console.log(bokstav);
    }
}