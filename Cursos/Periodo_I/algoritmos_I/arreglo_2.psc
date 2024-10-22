Algoritmo arreglo_2
	Definir arreglo, i, largo Como Entero;
	Escribir "Escriba un numero";
	Leer largo;
	Dimension arreglo[largo];
	
	Para i <- 0 Hasta largo-1 Con Paso 1 Hacer
		arreglo[i] = Aleatorio(20,30);
	Fin Para
	
	Para i <- 0 Hasta largo-1 Con Paso 1 Hacer
		escribir arreglo[i];
	Fin Para
FinAlgoritmo
