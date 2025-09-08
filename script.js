//costante costo per kilometro
const kmPrice = 0.21;

//costanti scontistiche
const underAgeDisc = 0.8;
const ove65Disc = 0.6;

//seleziono gli input
const kmInput = document.getElementById("kmForm");
const ageInput = document.getElementById("ageForm");
const myForm = document.querySelector("form");
const userName = document.getElementById("nameInput")
const myDiscBtn = document.getElementById("discBtn");

//seleziono l'outpout
const myPriceOut = document.getElementById("priceOut");
const myNameOut = document.getElementById("nameOut");
const myKmOut = document.getElementById("kmOut");


//invio form
myForm.addEventListener("submit",
    function (evento) {
        //inibisco invio
        evento.preventDefault();
        //calcolo prezzo
        let finalValue = kmInput.value * kmPrice; 
        //verifico scontistica
        if(ageInput.value < 18) {
            finalValue = finalValue * underAgeDisc;
        }else if(ageInput.value > 65){
            finalValue = finalValue * ove65Disc;
        }
        //scrittura out
        myNameOut.innerHTML = userName.value;
        myPriceOut.innerHTML = finalValue.toFixed(2)+"€";
        myKmOut.innerHTML = kmInput.value;
    }
);


myDiscBtn.addEventListener("click",
    function (evento) {
        evento.preventDefault();
        console.log("hai premuto annulla");
        myNameOut.innerHTML = "";
        myPriceOut.innerHTML = "";
        myKmOut.innerHTML = "";
    }
);
