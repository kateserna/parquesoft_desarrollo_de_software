Funcion res <- CalcularDoble(num por valor) 
	Definir res Como Entero;
	res <- num*2; // retorna el doble
FinFuncion

Funcion Triplicar(num por referencia) 
	num <- num*3; 
FinFuncion

Algoritmo PruebaFunciones
	definir x Como entero;
	Escribir "Ingrese un valor num�rico para x:";
	Leer x;
	
	Escribir "Llamada a la funci�n CalcularDoble (pasaje por valor)";
	Escribir "El doble de ",x," es ", CalcularDoble(x);
	Escribir "El valor original de x es ",x;
	
	Escribir "Llamada a la funci�n Triplicar (pasaje por referencia)";
	Triplicar(x);
	Escribir "El nuevo valor de x es ", x;
	
FinAlgoritmo

