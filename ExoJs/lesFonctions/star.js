/*
Exercice : pyramide
Écrire une boucle qui va dessiner dans 
a console (ligne par ligne) le résulat suivant
                *
                **
                ***
                ****
                *****
*/
/*Boucle for qui va à chaque itération déssiner 
une étoile ( dans une balise p: pour mettre à la ligne)
Puis une seconde boucle à l'intérieur, j<=i!!!
*/


for(let i=1; i<=5;i++){
    for(let j=1; j<=i; j++){
        document.write("*&nbsp;&nbsp;&nbsp;");   
    }
    document.write("<br>")
}




