// les imports
// ?? pour évoluer : faire tout les imports ralentissent le programme ??
// autre façon de faire avec une boucle, possible //

// mot de language utiliser : import{} ; const ; let ; .getElementById ; .querySelectorAll
// querySelector ; Math. ; floor() ; randon(); .style. ; string() ; .lastchild.
// function ; if(){}else(){} ; for() ; .split() ; .forEach() ; addEventListener() ; .innerHTML = ; setAttributes() ;


import { motDe5lettres } from "./moduleJS/motDe_5_lettres.js";
import { motDe6lettres } from "./moduleJS/motDe_6_lettres.js";
import { motDe7lettres } from "./moduleJS/motDe_7_lettres.js";
import { motDe8lettres } from "./moduleJS/motDe_8_lettres.js";
import { motDe9lettres } from "./moduleJS/motDe_9_lettres.js";
import { motDe10lettres } from "./moduleJS/motDe_10_lettres.js";
import { motDe11lettres } from "./moduleJS/motDe_11_lettres.js";
import { motDe12lettres } from "./moduleJS/motDe_12_lettres.js";
import { motDe13lettres } from "./moduleJS/motDe_13_lettres.js";
import { motDe14lettres } from "./moduleJS/motDe_14_lettres.js";
import { motDe15lettres } from "./moduleJS/motDe_15_lettres.js";
import { motDe16lettres } from "./moduleJS/motDe_16_lettres.js";
import { motDe17lettres } from "./moduleJS/motDe_17_lettres.js";
import { motDe18lettres } from "./moduleJS/motDe_18_lettres.js";
import { motDe19lettres } from "./moduleJS/motDe_19_lettres.js";
import { motDe20lettres } from "./moduleJS/motDe_20_lettres.js";
import { motDe21lettres } from "./moduleJS/motDe_21_lettres.js";

// définition des variables et constante
const option = document.getElementById('nbLettre');
const lettreChoisit = document.querySelectorAll('.lettre');
const motATrouver = document.getElementById('motATrouver');
const imagePendu = document.querySelector('img');
const message = document.getElementById('leMessage');
const btnRejouer = document.querySelector('.rejouer');
const recherche = document.querySelector('.recherche');

let nbCaractere;
let leMotATrouver = "";
let compteurLettreTrouver = 0;
let compteurMauvaiseLettre = 0;
let compteur = 0;
let interval = null;
let ajoutDiv = "";
// tableau qui défini le nombre d'image par animation
let animation = [1, 31, 59, 86, 109, 124, 128, 145, 158, 174]



//cette fonction affiche le nombre relative à la taille du mot à retrouver
// ou lors du lancement de la page
function auClic() {
    motATrouver.innerHTML = "";
    nbCaractere = option.value;
    // cas ou value = ?? ou hasard
    if (nbCaractere === "22") {
        nbCaractere = Math.floor(Math.random() * 16) + 5;
        option.value = nbCaractere;
    }
    // crée une div pour chaque lettre du mot à trouver
    for (let i = 0; i < nbCaractere; i++) {
        ajoutDiv = ajoutDiv + `<div id=${i} class="lettreDuMotATrouver" ></div>`;
        // autre facon de faire
        // let ajoutDeDiv = document.createElement('div');
        // ajoutDeDiv.id = i;
        // ajoutDeDiv.className = "lettreDuMotATrouver"
        // let text = document.createTextNode(' ');
        // ajoutDeDiv.appendChild(text);
        // motATrouver.appendChild(ajoutDeDiv);
    }
    motATrouver.innerHTML = ajoutDiv; // ligne à supprimer en cas d'utilisation de l'autre facon
    // lance la fonction pour choisir le mot à trouver 
    choixDuMot(nbCaractere);
}

// etrait des differents modules le mot avec du mot défini dans la fonction auClic
function choixDuMot(tailleMot) {
    let tableau = [];
    if (tailleMot === "5") {
        tableau = motDe5lettres.split(' ');
    } else if (tailleMot === "6") {
        tableau = motDe6lettres.split(' ');
    } else if (tailleMot === "7") {
        tableau = motDe7lettres.split(' ');
    } else if (tailleMot === "8") {
        tableau = motDe8lettres.split(' ');
    } else if (tailleMot === "9") {
        tableau = motDe9lettres.split(' ');
    } else if (tailleMot === "10") {
        tableau = motDe10lettres.split(' ');
    } else if (tailleMot === "11") {
        tableau = motDe11lettres.split(' ');
    } else if (tailleMot === "12") {
        tableau = motDe12lettres.split(' ');
    } else if (tailleMot === "13") {
        tableau = motDe13lettres.split(' ');
    } else if (tailleMot === "14") {
        tableau = motDe14lettres.split(' ');
    } else if (tailleMot === "15") {
        tableau = motDe15lettres.split(' ');
    } else if (tailleMot === "16") {
        tableau = motDe16lettres.split(' ');
    } else if (tailleMot === "17") {
        tableau = motDe17lettres.split(' ');
    } else if (tailleMot === "18") {
        tableau = motDe18lettres.split(' ');
    } else if (tailleMot === "19") {
        tableau = motDe19lettres.split(' ');
    } else if (tailleMot === "20") {
        tableau = motDe20lettres.split(' ');
    } else {
        tableau = motDe21lettres.split(' ');
    }
    leMotATrouver = tableau[Math.floor(Math.random() * tableau.length) - 1];
}



// affiche les bonnes lettres quand la partie est perdu
function lesBonnesLettreEtait() {
    for (compteur = 0; compteur < (tableauDuMotATrouver.length + 1); compteur++) {
        document.getElementById(`${compteur}`).innerHTML = tableauDuMotATrouver[compteur];
    }
    // rejouer();
}

// défini au hasard le nombre de lettre puis lance la fonction auClic();
option.value = Math.floor(Math.random() * 16) + 5;
auClic();

// écout le changement du nombre et affiche le nombre de lettre à trouver dans la zone du mot à trouver 
option.addEventListener('change', () => { auClic() });

// recupere la lettre choisit dans le clavier virtuel
lettreChoisit.forEach((uneLettre) => {
    uneLettre.addEventListener("click", () => {
        let bonneLettre = false;
        if (uneLettre.classList[1] != "jouer") {
            option.setAttribute("disabled", "");
            uneLettre.classList.add("jouer");
            // compare la lettre jouer pour savoir si elle fait partie du mot 
            // si oui l'affiche dans la bonne case 
            // si non et si aucune lettre n'a correspondu affiche une animation 
            let tableauDuMotATrouver = leMotATrouver.split('');
            for (let i = 0; i < tableauDuMotATrouver.length; i++) {
                if (uneLettre.innerHTML === tableauDuMotATrouver[i]) {
                    bonneLettre = true;
                    document.getElementById(`${i}`).innerHTML = uneLettre.innerHTML;
                    compteurLettreTrouver = compteurLettreTrouver + 1
                    if (compteurLettreTrouver === tableauDuMotATrouver.length) {
                        message.innerHTML = "GAGNER";
                        message.style.color = "blue";
                        rejouer();
                    }
                }
            }
            // bonneLettre est restée a false, donc compte une nouvelle erreur et lance l'animation 
            // si il y a plus de 8 erreur c'est la fin de partie
            if (bonneLettre === false) {
                compteurMauvaiseLettre = compteurMauvaiseLettre + 1;
                compteur = animation[compteurMauvaiseLettre - 1];
                interval = setInterval(jouer_animation, 50);
                if (compteurMauvaiseLettre === 9) {
                    message.innerHTML = "PERDU";
                    message.style.color = "red";
                    for (let i = 0; i < (tableauDuMotATrouver.length); i++) {
                        document.getElementById(`${i}`).innerHTML = tableauDuMotATrouver[i];
                    }
                    setTimeout(() => {message.innerHTML ="le mot était : " + leMotATrouver}, 2000);
                    setTimeout(rejouer,2000);
                    
                }
            }
        }

    })
})

// affichage les images de l'animation pendu 
function jouer_animation() {
    imagePendu.src = "./images/" + String(compteur).padStart(4, 0) + ".png";
    if (compteur < (animation[compteurMauvaiseLettre] + 1)) {
        compteur++;
    } else {
        clearInterval(interval);
    }
}

// remise à zero des lettres jouer 
function rejouer() {
    setTimeout(() => {
        option.setAttribute("disabled", "");
        message.innerHTML="";
        btnRejouer.classList.add('visible');
        recherche.classList.add('visible');
        recherche.lastChild.innerHTML=leMotATrouver;
        recherche.lastChild.href =`https://www.qwant.com/?q=${leMotATrouver}&t=web`;
    }, 2500)
    btnRejouer.addEventListener('click', () => { location.reload(); });
}
