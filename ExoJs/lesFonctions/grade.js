/*
Exercice : assigner des grades
Écrire une boucle qui va itérer de 0 à 100
Écrire une fonction qui va retourner des grades selon les scores reçu
si le score au dessus de 90 le grade est A
si le score au dessus de 80 le grade est B
si le score au dessus de 70 le grade est C
si le score au dessus de 65 le grade est D
si le score n'entre pas dans ces catégories le grade est F
afficher dans la console le résultat par exemple : "Pour 82 points vous avez le grade B".
*/


/*fonction qui va retourner les grades*/
function grade(){
    /*Demander à lutilisateur d'entrer un score*/
    let scores;
    while(isNaN(scores)){
        scores = parseInt(prompt("Entrez un score !"));
    }

    /*Création de la boucle*/
    for(let i=0; i<=100; i++){
    
    }

        /*condition des grades*/
    if(scores >90 && scores <= 100){
        document.write("Vous avez le grade A");
    }else if(scores >80 && scores <90){
        document.write("Vous avez le grade B");
    }else if(scores >70 && scores <80){
        document.write("Vous avez le grade C");
    }else if(scores >65 && scores < 70){
        document.write("Vous avez le grade D");
    }else{
        document.write("Vous avez le grade F");
    }

}

grade();

