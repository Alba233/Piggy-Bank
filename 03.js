let myInput = document.getElementsByName("deleteCross"); 
for (let i = 0; i < myInput.length; i++) {
    console.log(myInput[i])
}


document.getElementsByName("deleteCross").addEventListener("click", function(){
    console.log(document.getElementsByName("price"))
})


