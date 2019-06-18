window.addEventListener("load", sidenVises)

//Når siden er loaded kald functionen sidenVises

function sidenVises() {
    //Udskriv at du er i denne funtion i consolen
    console.log("sidenVises");
    //Kald loadSide functionen
    loadSide();
}

function loadSide() {
    //Udskriv at du er i denne funtion i consolen
    console.log("loadSide");
    //Gør så man kan klikke på #man vælger
    document.querySelector("#tlf").addEventListener("click", clickRotation);
}

function clickRotation() {
    //Udskriv at du er i denne funtion i consolen
    console.log("clickRotation");
    //tilføj classen forsvind til this
    this.classList.add("rotation");
    this.removeEventListener("click", clickRotation);
}



