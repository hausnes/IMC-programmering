console.log("Programmet fungerer."); // Vi tester at JS er koblet mot HTML

//alert("Utskrift, alert!"); // Dette er en popup i nettleseren.

// Endre innhold av typen tekst i HTML
//document.getElementById("overskrift").innerHTML = "Hausnes";
//document.getElementById("paragraf").innerHTML = "Ny tekst!";

// Vi kan be brukeren om informasjon via et enkelt tekstfelt og bruke dette på nettsiden:
let navn = prompt("Hva heter du?");
document.getElementById("overskrift").innerHTML = "Hei, " + navn; // Endrer h1-taggen i HTML til "Hei, Jo Bjørnar" om jeg skrev inn navnet mitt.

// Vi kan be brukeren om en farge og bruke denne ved å endre stilark
//let fargevalg = prompt("Hva er din favorittfarge (svar på engelsk)?");
//document.body.style.backgroundColor = fargevalg;
//document.getElementById("overskrift").style.color = "yellow";

// Enda bedre enn eksempelet over så kan vi bruke et innebygd "verktøy" som heter input
document.getElementById("fargevelger").onchange = function() {
    document.body.style.background = document.getElementById("fargevelger").value; 
}

// Både å trykke på knappen og selve bildet kjører samme funksjonen ('endreBilde')
document.getElementById("knappEndreBilde").addEventListener("click", endreBilde);
document.getElementById("bilde").addEventListener("click", endreBilde);

let aktivtBilde = "config"; // Vi tar vare på info om hvilket bilde som vises først.

// Her er selve funksjonen endreBilde: Basert på hvilket bilde som vises fra før så endrer vi det.
function endreBilde() {
    if(aktivtBilde=="config"){
        document.getElementById("bilde").src = "bilder/laptop.png";
        aktivtBilde = "laptop";
    }
    else {
        document.getElementById("bilde").src = "bilder/config.png";
        aktivtBilde = "config";
    }
}

// Her gjør vi det mulig å gjøre bildet større ved å trykke på knappen
document.getElementById("knappStørre").addEventListener("click", størreBilde);
function størreBilde() {
    document.getElementById("bilde").width += 10;
}

// Her gjør vi det mulig å gjøre bildet mindre ved å trykke på knappen
document.getElementById("knappMindre").addEventListener("click", mindreBilde);
function mindreBilde() {
    document.getElementById("bilde").width -= 10;
}