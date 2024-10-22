//7) Dada una secuencia de números leídos por teclado, que acabe con un ?1, 
//por ejemplo: 5,3,0,2,4,4,0,0,2,3,6,0,??,-1; Realizar el algoritmo que calcule 
//la media aritmética. Suponemos que el usuario no insertara numero negativos.

Algoritmo promedio_numeros
	Definir num, contador_numeros, suma_num Como Entero;
	Definir promedio Como Real;
	
	contador_numeros = 0;
	suma_num = 0;
	
	Escribir "Escriba un numero para promediar hasta llegar a -1:";
	Leer num;
	
	Mientras num <> -1 Hacer
		contador_numeros = contador_numeros +1;
		suma_num = suma_num + num;
		Escribir "Escriba un numero para promediar hasta llegar a -1:";
		Leer num;
		Imprimir num;
	Fin Mientras
		
	promedio = suma_num/contador_numeros;
	Escribir promedio;
	
FinAlgoritmo
