// création d'une variable button qui est l'élément button du html 
// var button = document.getElementById('button')

// afficher dans le terminal
// console.log(button)

// j'ajoute un écouteur sur un évènement
// j'appelle la méthode avec le point
document.querySelector('button').addEventListener('click', function() {
    // créér une nouvelle variable pour le titre
    var title = document.getElementById("window").innerText;
    alert(title);
});
