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
let animation = [1, 30, 57, 85, 108, 123, 128, 144, 159, 173]

let tableauDImage=  ['./images/0001.png','./images/0002.png','./images/0003.png','./images/0004.png','./images/0005.png','./images/0006.png','./images/0007.png','./images/0008.png','./images/0009.png','./images/0010.png','./images/0011.png','./images/0012.png','./images/0013.png','./images/0014.png','./images/0015.png','./images/0016.png','./images/0017.png','./images/0018.png','./images/0019.png','./images/0020.png','./images/0021.png','./images/0022.png','./images/0023.png','./images/0024.png','./images/0025.png','./images/0026.png','./images/0027.png','./images/0028.png','./images/0029.png','./images/0030.png','./images/0031.png','./images/0032.png','./images/0033.png','./images/0034.png','./images/0035.png','./images/0036.png','./images/0037.png','./images/0038.png','./images/0039.png','./images/0040.png','./images/0041.png','./images/0042.png','./images/0043.png','./images/0044.png','./images/0045.png','./images/0046.png','./images/0047.png','./images/0048.png','./images/0049.png','./images/0050.png','./images/0051.png','./images/0052.png','./images/0053.png','./images/0054.png','./images/0055.png','./images/0056.png','./images/0057.png','./images/0058.png','./images/0059.png','./images/0060.png','./images/0061.png','./images/0062.png','./images/0063.png','./images/0064.png','./images/0065.png','./images/0066.png','./images/0067.png','./images/0068.png','./images/0069.png','./images/0070.png','./images/0071.png','./images/0072.png','./images/0073.png','./images/0074.png','./images/0075.png','./images/0076.png','./images/0077.png','./images/0078.png','./images/0079.png','./images/0080.png','./images/0081.png','./images/0082.png','./images/0083.png','./images/0084.png','./images/0085.png','./images/0086.png','./images/0087.png','./images/0088.png','./images/0089.png','./images/0090.png','./images/0091.png','./images/0092.png','./images/0093.png','./images/0094.png','./images/0095.png','./images/0096.png','./images/0097.png','./images/0098.png','./images/0099.png','./images/0100.png','./images/0101.png','./images/0102.png','./images/0103.png','./images/0104.png','./images/0105.png','./images/0106.png','./images/0107.png','./images/0108.png','./images/0109.png','./images/0110.png','./images/0111.png','./images/0112.png','./images/0113.png','./images/0114.png','./images/0115.png','./images/0116.png','./images/0117.png','./images/0118.png','./images/0119.png','./images/0120.png','./images/0121.png','./images/0122.png','./images/0123.png','./images/0124.png','./images/0125.png','./images/0126.png','./images/0127.png','./images/0128.png','./images/0129.png','./images/0130.png','./images/0131.png','./images/0132.png','./images/0133.png','./images/0134.png','./images/0135.png','./images/0136.png','./images/0137.png','./images/0138.png','./images/0139.png','./images/0140.png','./images/0141.png','./images/0142.png','./images/0143.png','./images/0144.png','./images/0145.png','./images/0146.png','./images/0147.png','./images/0148.png','./images/0149.png','./images/0150.png','./images/0151.png','./images/0152.png','./images/0153.png','./images/0154.png','./images/0155.png','./images/0156.png','./images/0157.png','./images/0158.png','./images/0159.png','./images/0160.png','./images/0161.png','./images/0162.png','./images/0163.png','./images/0164.png','./images/0165.png','./images/0166.png','./images/0167.png','./images/0168.png','./images/0169.png','./images/0170.png','./images/0171.png','./images/0172.png','./images/0173.png','./images/0174.png','./images/0175.png',];


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
    // la ligne de dessous n'est pas assez rapide a cause du temps de chargement 
    // imagePendu.src = "./images/" + String(compteur).padStart(4, 0) + ".png";
    // donc elle est changer par la ligne si dessous
    imagePendu.src = tableauDImage[compteur];
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
