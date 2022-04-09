const heltBilde = document.getElementById("helt");
const bossBilde = document.getElementById("boss");
const knappAngrip = document.getElementById("angrip");
const helseHelt = document.getElementById("helseHelt");
const helseBoss = document.getElementById("helseBoss");

let hpHelt = 120;
let hpBoss = 260;

/*
knappAngrip.addEventListener("click", angrip);

function angrip() {
    console.log("Angrip!");
    //heltBilde.style.left = "350px";

    //heltBilde.classList.add("animasjonHeltAngrip");
    heltBilde.classList.toggle("animasjonHeltAngrip");
    //heltBilde.offsetWidth;
    //heltBilde.classList.remove("animasjonHeltAngrip");
    
    //heltBilde.classList.add("animasjonHeltIdle");

    //heltBilde.style.animation = "heltAngrip 2s linear";

    let skade = getRandomIntInclusive(3,8);
    hpBoss -= skade;
    helseBoss.innerHTML = "HP: " + hpBoss;
}
*/

// Strategien for å starte animasjon på nytt: https://css-tricks.com/restart-css-animation/
knappAngrip.addEventListener("click", function(e) {
    e.preventDefault;

    // -> removing the class
    heltBilde.classList.remove("animasjonHeltAngrip");

    // -> triggering reflow /* The actual magic */
    // without this it wouldn't work. Try uncommenting the line and the transition won't be retriggered.
    // Oops! This won't work in strict mode. Thanks Felis Phasma!
    // element.offsetWidth = element.offsetWidth;
    // Do this instead:
    void heltBilde.offsetWidth;

    // -> and re-adding the class
    heltBilde.classList.add("animasjonHeltAngrip");

    let skade = getRandomIntInclusive(3,8);
    hpBoss -= skade;
    helseBoss.innerHTML = "HP: " + hpBoss;
}, false);

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}  