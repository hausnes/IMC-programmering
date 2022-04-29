const heltBilde   = document.getElementById("helt");
const bossBilde   = document.getElementById("boss");
const knappAngrip = document.getElementById("angrip");
const helseHelt   = document.getElementById("helseHelt");
const helseBoss   = document.getElementById("helseBoss");

let hpHelt = 120;
let hpBoss = 260;

// Strategien for å starte animasjon på nytt: https://css-tricks.com/restart-css-animation/
knappAngrip.addEventListener("click", function(e) {
    e.preventDefault;

    let skade = getRandomIntInclusive(3,8); // Angrepet gjer skade mellom 3 og 8
    hpBoss -= skade;
    if (hpBoss <= 0) {
        // Handter seier
    } 
    else if (hpHelt <= 0) {
        // Handter død
    } 
    else {
        // Startar animasjonen som skal indikere eit angrep
        animer(heltBilde,"animasjonHeltAngrip");
        /* Alternativt: 
        heltBilde.classList.remove("animasjonHeltAngrip");
        void heltBilde.offsetWidth;
        heltBilde.classList.add("animasjonHeltAngrip");
        */

        // Blinkar rundt HP for å indikere at bossen mistar liv, ventar 1 sek (1000 ms) før denne køyrer
        window.setTimeout(function() {
            animer(helseBoss,"animasjonBlinkHelse");
            helseBoss.innerHTML = "HP: " + hpBoss;
        }, 1000);

        // Etter at helten har angripe så angrip bossen automatisk
        window.setTimeout(function() {
            let skadeFraBoss = getRandomIntInclusive(5,10);
            hpHelt -= skadeFraBoss;
            if (hpHelt <= 0) {
                
            } else {
                window.setTimeout(function() {
                    helseHelt.innerHTML = "HP: " + hpHelt;
                }, 1000);
            }
            
            animer(bossBilde,"animasjonBossAngrip");
        }, 2000);

        window.setTimeout(function() {
            animer(helseHelt, "animasjonBlinkHelse");
        }, 3000);
    }
}, false);

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

function animer(karakter,animasjon) {
    karakter.classList.remove(animasjon);
    void karakter.offsetWidth;
    karakter.classList.add(animasjon);
}