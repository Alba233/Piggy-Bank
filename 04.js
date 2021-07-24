// let myInput = document.getElementsByName("deleteCross"); 
// for (let i = 0; i < myInput.length; i++) {
//     console.log(myInput[i])
// }


// document.getElementsByName("deleteCross").addEventListener("click", function(){
//     console.log(document.getElementsByName("price"))
// })


// je suppose que dans mon tiroir price il y a lobjet price, ma class du html pour récupérer mes prix
let price = document.querySelectorAll('td.price') 
// je spécifie td pour présicer que je veux cet élément du tableau
// et la il lis toute la ligne, je dois récupérer juste le nombre dans les balises.

console.log(price)
let result = 0
function push() {
    // pour récupérer les valeurs du tableau je fait une boucle for
    for (var i = 0; i < price.length; i++){
        // je vais chercher le contenu textuel de la balise
        text = price[i].textContent
        sum = parseFloat(text, 10) + parseFloat(result, 10)
    }
    alert(sum)
};

updateTotal();

let myInputs = document.getElementsByClassName("deleteCross"); 
console.log(myInputs)
for (let i = 0; i < myInputs.length; i++) {
    myInputs[i].addEventListener("click", function(){
        console.log(this)
        this.parentElement.parentElement.remove();
        updateTotal();
}) 
}

function updateTotal(){
    let total = 0;
    price = document.querySelectorAll('td.price')
    for (var i = 0; i < price.length; i++){
        text = price[i].textContent
        total = parseFloat(text, 10) + parseFloat(total, 10)
    }
    document.getElementById("total").innerHTML = total.toFixed(2);

}
