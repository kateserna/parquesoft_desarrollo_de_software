Algoritmo dimension_ciclo_para
	
	Dimension D[3];
	Definir promedio Como Entero;
	Definir nota Como Entero;
	Definir temp Como Entero;
	definir i Como Entero;
	
	
	para cada temp de D Hacer
		Escribir "Digite su nota";
		Leer nota;
		temp = nota;
	FinPara
	
	para i Desde 1 hasta 3 Hacer
		promedio = promedio + D[i];
	FinPara
	
	Escribir promedio/3;
	
FinAlgoritmo
