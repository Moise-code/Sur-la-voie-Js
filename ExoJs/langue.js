/*Crée une variable pour specifier une langue ex ("fr","es","en")
Crée une autre variable qui servira à stocker un message
Crée une condition pour savoir quelle sera la valeur du message si elle est "fr","es","en".
afficher "Bonjour tout le monde", "Hello world" et "Hola, Mundo" selon la bonne langue
*/

 let langue = prompt("Entrez votre langue: fr,en,es!");
 let message = langue;
 if(message == "fr"){
   document.write("Bonjour tout le monde !");
 }else if(message == "en"){
    document.write("Hello world !");
 }else if(message == "es"){
     document.write("Hola, Mundo !");
 }else{
    alert("Donnée incorrect, essayez de nouveau !");
 }