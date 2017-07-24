/*Description: Challenge Cookies
Auteurs: Jean-Claude Grondin
Contact: decle29@gmail.com
URL Github: https://github.com/Akhdin 
exo: 1,2,3,4,5,6,9 et un peu du (15)*/


//initialisation des variables//
var score = 0
var multiplicateur = 1
var affichage = 0
var cout = 20
 
//fonction pour afficher le score//
function point() {
    score = score + multiplicateur;
    var affichage = document.getElementById('affichage')
    affichage.innerText = "score: " + score;
}

//fonction pour le multiplicateur//
function augmenterMultiplicateur(){
     multiplicateur = multiplicateur + 1;
     score = score - cout;

     //double le cout du multiplicateur//
     cout = cout *2;
  'affichage'.innerText = score;
}


    





