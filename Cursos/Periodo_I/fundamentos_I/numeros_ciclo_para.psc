Algoritmo numeros_ciclo_para
	//declara un arreglo de 10 elementos
	Definir elemento Como entero;
	definir i Como Entero;
	Definir A Como Entero;
	
	Dimension A[11];
	
	//recorrer los 10 elemntos y va asignandoles enteros aleatorios
	Para Cada elemento de A Hacer
		//elemento toma el contenido de cada posicion del arreglo
		// y si se modifica elemento se modifica el arreglo
		elemento = azar(100); //numeros del 0 al 99.
	FinPara
	
	Escribir "Los elementos del arreglo son: ";
	// recorre los 10 elementos utilizando subindices y los muestra en pantalla
	para i<-1 hasta 10 Hacer
		escribir "Posicion ", i, ": ", A[i];
	FinPara
	
	Escribir " "; //Deja una linea en blanco
	
	Escribir "En orden inverso: ";
	//recorre los 10 elementos en orden inverso y los muestra en una misma linea
	para i = 10 hasta 1 Hacer
		escribir A[i], " ", Sin Saltar;
	FinPara
		
	
FinAlgoritmo
