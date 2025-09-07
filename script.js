//costante costo per kilometro
const kmPrice = 0.21;

//costanti scontistiche
const underAgeDisc = 0.8;
const ove65Disc = 0.6;

//seleziono gli input
const kmInput = document.getElementById("kmForm");
const ageInput = document.getElementById("ageForm");
const myForm = document.querySelector("form");

//seleziono l'outpout
const myOut = document.getElementById("out");


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
        myOut.innerHTML = finalValue.toFixed(2)+"€";
    }
);


