/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
var numeroUno 
var numeroDos
var suma
numeroUno = document.getElementById("numeroUno").value;
numeroDos = document.getElementById("numeroDos").value;
suma = parseInt(numeroUno)+ parseInt(numeroDos)
alert("La suma es "+suma)

}

