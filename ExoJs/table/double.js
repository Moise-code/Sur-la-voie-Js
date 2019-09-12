/*Exercice : clone
crée un tableau qui contetient les valeurs suivantes : "Mario", "Luigi", "Peach"
dupliquer le tableau et y ajouter "Bowser"*/

let jeux1 = ['Mario','Luigi','Peach'];
let jeux2=[];

for(let i=0; i<jeux1.length; i++){
    jeux2[i] = jeux1[i]; 
    jeux2.push('Bowser');  
}

console.log(jeux1);
console.log(jeux2);