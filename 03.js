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
result = 0
function push() {
    // pour récupérer les valeurs du tableau je fait une boucle for
    for (var i = 0; i < price.length; i++){
        // je vais chercher le contenu textuel de la balise
        text = price[i].textContent
        sum = parseFloat(text, 10) + parseFloat(result, 10)
    }
    alert(sum)
};

document.getElementById('mybtn').addEventListener("click", function() {
    let myinput = document.getElementById('name').value;
    console.log(myinput);
    let mydesc = document.getElementById('description').value;
    console.log(mydesc);
    let myprice = document.getElementById("price").value;
    console.log(myprice);

    result = "Name: " + myinput + "\n" + "Descprition: " + mydesc + "\n" + "Price" + myprice
    alert(result)
})



// =========== STEP 3 ===========
let myInputs = document.getElementsByClassName("deleteCross"); 
console.log(myInputs)
for (let i = 0; i < myInputs.length; i++) {
    myInputs[i].addEventListener("click", function(){
        console.log(this)
        this.parentElement.parentElement.remove();
}) 
}
