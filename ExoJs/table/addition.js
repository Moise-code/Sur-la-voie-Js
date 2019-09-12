/*
Exercice : addition
crée un tableau qui contient les valeurs suivantes : 1, 2, 3, 4, 5, 6, 7, 8, 9
faire une boucle qui permet d'additioner toutes ces valeurs
*/
let add = [1,2,3,4,5,6,7,8,9];
let result = 0;
for(let i=0; i<add.length; i++){
    result += add[i];
}
document.write("<p>" + "la somme de " + add + ":" + " " + result);