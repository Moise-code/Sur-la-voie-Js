/*
 Exercice : Pair et impair
Ecrivez une boucle qui va itérer de 0 à 20.
Pour chaque itération , il va vérifier si le nombre actuel est pair ou impair
afficher dans la console par exemple : " 2 est pair "
*/

/*Itération de 0 à 20*/
for(let i=1; i<=20;i++){
    console.log(i);
    /*Vérifier si le nbr est pair ou impair pour caque itération*/
    /*nbr est impair s'il reste 1 lors du modulo. 
    Est pair s'il reste 0*/
    if(i % 2 === 0){
        console.log(i + " " + " est pair");
    }else{
        console.log(i + " "+ "est Impair");
    }
    
    

}