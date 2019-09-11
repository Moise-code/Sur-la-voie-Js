/*
Exercice : Mettre au pluriel
Crée une variable contenant un mot au singulier
crée une variable qui contient le nombre dont tu en dispose
crée une variable qui contiendra le résultat
Faire une condition pour savoir si il faut rajouter un "s" ou pas
Le résultat doit être par exemple : "Je possède 4 pommes"
*/

let motSingulier = prompt("motSingulier");
let nbrDispo = parseInt(prompt("nbrDispo"));
let resultat;

/*Condition pour savoir si l'utilisateur à bien entrée les bonnes données
pour savoir s'il faut un 's' ou pas*/
if(isNaN(nbrDispo)){
    alert("Ce n'est pas un nombre, entrez en un svp !");
}else if(nbrDispo > 1){
    resultat = "Vous possédez " + nbrDispo + " " + motSingulier + "s";
    alert(resultat);
}else{
    resultat = "Vous possédez " + nbrDispo + " " + motSingulier;
    alert(resultat);
}


