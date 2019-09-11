/*Fonction qui fait des soustractions*/
function soustract(a,b){
    return a - b;
}
/*alert(soustract(10,5));*/

/*Fonction qui fait des additions*/
function addition(a,b){
    return a + b;
}
/*alert(addition(45,45));*/

/*Fonction qui fait des multiplication*/
function mult(a,b){
    return a * b;
}

/*Fonction qui fait des calcule de pourcentages 
( 2 arguments: valeur et pourcentage ) par exemple : "50% de 10 = 5";
*/

function percent(a,b){
    b = 100;
    return (a/b)*10;
}
/*alert(percent(50,10));*/


/*
Faire un fonction qui fait des calcules de vitesse 
(2 arguments : distance, temps en heure)
Le résultat doit être par exemple : '50km/h'
*/
/*Calcul de vitesse: DISTANCE / LA DUREE*/
function speedy(distance,duree){
    let vitesse = distance / duree;
    return vitesse;
}
alert(speedy(4,2)+'km/h');