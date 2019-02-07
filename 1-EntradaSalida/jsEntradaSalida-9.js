/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
var sueldo;
var resultado;
var aumento;
sueldo = document.getElementById("sueldo").value;
aumento = parseInt(sueldo)*0.10;
resultado= parseInt(sueldo)+parseInt(sueldo)*0.10;
document.getElementById("resultado").value=resultado;

alert("Su aumento fue de $"+aumento)


}
