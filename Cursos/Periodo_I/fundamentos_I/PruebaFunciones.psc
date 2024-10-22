// funcion que no recibe ni devuelve nada
Funcion Saludar
	Escribir "Hola mundo!";
FinFuncion

// funcion que recibe un argumento por valor, y devuelve su doble
Funcion res <- CalcularDoble(num) 
	definir res Como Entero;
	res <- num*2; // retorna el doble
FinFuncion

// proceso principal, que invoca a las funciones antes declaradas
Algoritmo PruebaFunciones
	definir x Como Entero;
	
	Escribir "Llamada a la funcion Saludar:";
	Saludar; // como no recibe argumentos pueden omitirse los par�ntesis vacios
	
	Escribir "Ingrese un valor num�rico para x:";
	Leer x;
	
	Escribir "Llamada a la funci�n CalcularDoble (pasaje por valor)";
	Escribir "El doble de ",x," es ", CalcularDoble(x);
	Escribir "El valor original de x es ",x;
	
FinAlgoritmo
