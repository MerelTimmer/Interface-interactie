// JavaScript Document
console.log("Howdy!");

/******************************/
/* OPEN DIALOGS */
/******************************/


// Het openen van de dilogen door op de tijdlijnknoppen te drukken.


var dialogOpen = false;

const EersteTijdlijnButton = document.querySelector("ol li:nth-of-type(2) button");
const EersteDialog = document.querySelector("ol li:nth-of-type(2) dialog");
const EersteForm = document.querySelector("ol li:nth-of-type(2) dialog form");

EersteTijdlijnButton.addEventListener("click", openEersteDialog);

function openEersteDialog() {
    EersteDialog.showModal();
    dialogOpen = true;
}





const TweedeTijdlijnButton = document.querySelector("ol li:nth-of-type(3) button");
const TweedeDialog = document.querySelector("ol li:nth-of-type(3) dialog");

TweedeTijdlijnButton.addEventListener("click", openTweedeDialog);

function openTweedeDialog() {
    TweedeDialog.showModal();
    dialogOpen = true;
}




const DerdeTijdlijnButton = document.querySelector("ol li:nth-of-type(5) button");
const DerdeDialog = document.querySelector("ol li:nth-of-type(5) dialog");

DerdeTijdlijnButton.addEventListener("click", openDerdeDialog);

function openDerdeDialog() {
    DerdeDialog.showModal();
    dialogOpen = true;
}




const VierdeTijdlijnButton = document.querySelector("ol li:nth-of-type(8) button");
const VierdeDialog = document.querySelector("ol li:nth-of-type(8) dialog");

VierdeTijdlijnButton.addEventListener("click", openVierdeDialog);

function openVierdeDialog() {
    VierdeDialog.showModal();
    dialogOpen = true;
}




const VijfdeTijdlijnButton = document.querySelector("ol li:nth-of-type(10) button");
const VijfdeDialog = document.querySelector("ol li:nth-of-type(10) dialog");

VijfdeTijdlijnButton.addEventListener("click", openVijfdeDialog);

function openVijfdeDialog() {
    VijfdeDialog.showModal();
    dialogOpen = true;
}


/******************************/
/* PRISON KNOPPEN */
/******************************/


function PlayPrison() {
    document.getElementById("gevangenisknop").style.animationPlayState = "running";
}




// Onderstaande code zorgt ervoor dat de 'back-button' het gevangeniselement laat 
// verdwijnen en de onderstaande elementen weer klikbaar zijn.

const chancebutton = document.querySelector(".back-button");
const gevangenisSectie = document.querySelector('#gevangenisknop');

chancebutton.addEventListener('click', () => {
  gevangenisSectie.style.animation = 'fadeOut 1s forwards';
  setTimeout(() => {
    gevangenisSectie.style.display = 'none';
    gevangenisSectie.style.animation = ''; // reset de animatie
    gevangenisSectie.style.display = 'block'; // reset display naar block
  }, 1000);
});







// De toetstenbord navigatie door de dialogen --> Sanne

window.addEventListener("keydown", handleKeydown);

function handleKeydown(event) {
    if(dialogOpen) {
        const pressedKey = event.key;

        if (pressedKey == "ArrowRight") {
            var openDialog = document.querySelector("dialog[open]");
            var currentLi = openDialog.closest("li");

            var nextLi = currentLi.nextElementSibling;

            while (nextLi) {
                if (nextLi.classList.contains('hasDialog')) {
                    break;
                }

                nextLi = nextLi.nextElementSibling;
            }

            if (nextLi) {
                openDialog.close();

                nextLi.scrollIntoView({ inline: "center" });

                var nextDialog = nextLi.querySelector("dialog");
                nextDialog.showModal();

            } else {
                openDialog.close();
                dialogOpen = false;
            }
        }

        else if (pressedKey == "ArrowLeft") {
            var openDialog = document.querySelector("dialog[open]");
            var currentLi = openDialog.closest("li");

            var prevLi = currentLi.previousElementSibling;

            while (prevLi) {
                if (prevLi.classList.contains('hasDialog')) {
                    break;
                }
                prevLi = prevLi.previousElementSibling;
            }

            if (prevLi) {
                openDialog.close();
                prevLi.scrollIntoView({ inline: "center" });
                var prevDialog = prevLi.querySelector("dialog");
                prevDialog.showModal();
            } else {
                openDialog.close();
                dialogOpen = false;
            }
        }

        
    }
}


const closeButtons = document.querySelectorAll("dialog button");

closeButtons.forEach(closeButton => {
    closeButton.addEventListener("click", () => {
        dialogOpen = false;
    });
});
