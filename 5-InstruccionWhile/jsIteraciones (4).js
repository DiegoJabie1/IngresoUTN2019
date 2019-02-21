function Mostrar()
{

var numero = parseInt(prompt("Ingrese un número entre 0 y 10."));

while(!(numero>=0&&numero<=10));
{
numero=parseInt(prompt("Número inválido, intente nuevamente: "));
}
document.getElementById("Numero").value=numero;

}//FIN DE LA FUNCIÓN