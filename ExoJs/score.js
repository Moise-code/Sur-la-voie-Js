/*Exercice : Affichage des scores
Crée une variable qui contient un score
Crée une variable qui contiendra le resultat
Faire des conditions pour pour etablir les rang selon le score
Vous avez le rang A si vous avez un score égal ou supérieur a 90
Vous avez le rang B si vous avez un score inférieur a 90
Vous avez le rang C si vous avez un score inférieur ou égal a 50
*/

let score = parseInt(prompt("Entrez votre score exemple: 20, 89"));
let resultat = score;

if(isNaN(score)){
    score = parseInt(prompt("Entrez un nombre svp !"));
}
/*Condition pour établir les rang*/
if(score >= 90){
    alert("Vous avez le rang A");
}else if(score <90 && score <= 50){
    alert("Si vous êtes au-dessus de 50, vous avez le rang B, 50 et endessous le rang C")
}else{
    alert("Euh..!");
}
