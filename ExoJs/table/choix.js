/*
Exercice : Vos meilleurs choix
crée un tableau qui contetient 3 nom d'acteurs
Pour chaque acteur, afficher dans la console par exemple : "Le numero 1 est Stalone"
Bonus:transformer en : "Le premier est Stalone", Le deuxième est Cruiz", etc... 
*/

/*Déclaration des variables*/
let myFavActor = ['Bruce Willis','Denzel Washington','Jane Seymour'];
let posActor = ['Le premier','Le deuxième',' La troisième'];

/*For loop, parcourir le tableau des acteurs*/
for(let i=0; i<myFavActor.length; i++){
    /*Petite condition pour l'acteur féminin*/
    if(myFavActor[i] === 'Jane Seymour'){
        console.log('La numéro ' + (1+i) + ' est: ' + myFavActor[i]);
    }else{
        console.log('Le numéro ' + (1+i) + ' est: ' + myFavActor[i]);
    }
    
    console.log(posActor[i] + ' est: ' + myFavActor[i]);
    
}