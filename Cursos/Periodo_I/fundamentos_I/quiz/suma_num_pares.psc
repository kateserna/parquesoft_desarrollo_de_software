//6) Se pide representar el algoritmo que nos calcule la suma de los N primeros números pares. 
//Es decir, si insertamos un 5, nos haga la suma de 6+8+10+12+14.

Algoritmo sin_titulo
	Definir num1, num_pares, i, contador_pares, total Como Entero;
	
	Escribir "Escriba un número entero:";
	Leer num1;
	
	i = num1;
	contador_pares = 0;	
	total = 0;
	Mientras contador_pares < num1 Hacer
		Si i % 2 == 0  Entonces
			contador_pares = contador_pares + 1;
			total = total + i;
			Imprimir i;
		Fin Si
		i = i +1;
		
	Fin Mientras
	
	Imprimir "La suma de los números pares es: ", total;
	
FinAlgoritmo
