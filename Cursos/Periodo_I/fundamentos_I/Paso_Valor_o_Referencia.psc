
// funcion que recibe un argumento por valor, y devuelve su doble
Funcion res <- CalcularDoble(num Por Valor) 
	definir res Como Entero;
	res <- num*2; // retorna el doble
FinFuncion

Funcion Triplicar(num Por Referencia) 
	num <- num*3; // retorna el triple
FinFuncion

// proceso principal, que invoca a las funciones antes declaradas
Algoritmo PruebaFunciones
	definir x Como Entero;
	
	Escribir "Ingrese un valor numérico para x:";
	Leer x;
	
	Escribir "Llamada a la función CalcularDoble (pasaje por valor)";
	Escribir "El doble de ",x," es ", CalcularDoble(x);
	Escribir "El valor original de x es ",x;
	
	Escribir "Llamada a la funcion Triplicar (pasaje por referencia)";
	Triplicar(x);
	Escribir "El nuevo valor de x es: ", x;
	
FinAlgoritmo
