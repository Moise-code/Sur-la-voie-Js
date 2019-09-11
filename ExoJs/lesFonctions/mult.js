/*
Exercice : Multiplication Tables
Écrire une boucle qui va itérer de 0 à 10
Pour chaque itération de la boucle, il va multiplier le nombre de 9
afficher dans la console le résultat par exemple : " 2 * 9 = 18".
*/

/*Demander à l'utilisateur d'entrer un nombre*/

/*Déclarer deux variable*/
let nombre, produit;

/*TANQUE LE NBR EST UN NBR
    LIRE: "ENTRER UN NOMBRE"
*/
while(isNaN(nombre)){
    nombre = parseInt(prompt("Entrez un nombre svp"));
}

/*POUR CHAQUE I EGAL 0; I < 10; INCREMENTER I DE 1*/
for(let i=0; i<=10;i++){
    produit = nombre * i;
    document.write("<p>" + nombre + " * " + i + " = " + produit + "</p>");
}
