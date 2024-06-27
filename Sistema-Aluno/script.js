
const button = document.querySelector("button");
const inputNota = document.querySelector("#nota");

//addEventListener escuta os eventos
button.addEventListener("click", function(event) {
    event.preventDefault();
console.log(inputNota.value);
if (inputNota.value >=6 ){
    alert("O aluno passou")

}else{
alert("Aluno repitiu")

}


})