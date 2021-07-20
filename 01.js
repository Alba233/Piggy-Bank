// je suppose que dans mon tiroir price il y a lobjet price, ma class du html pour récupérer mes prix
let price = document.querySelectorAll('td.price') 
// je spécifie td pour présicer que je veux cet élément du tableau
// et la il lis toute la ligne, je dois récupérer juste le nombre dans les balises.

console.log(price)
result = 0
function push() {
    // pour récupérer les valeurs du tableau je fait une boucle for
    for (var i = 0; i < price.length; i++){
        // je vais chercher le contenu textuel de la balise
        text = price[i].textContent
        result = parseFloat(text, 10) + parseFloat(result, 10)
    }
    alert(result)
};
