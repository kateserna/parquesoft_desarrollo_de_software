Algoritmo factor_ciclo_para
	Definir num1, i, factor Como Entero;
	Escribir "Escriba un numero";
	Leer num1;
	
	factor = 1;
	Para i<- num1 Hasta 1 Con Paso -1 Hacer
		factor = factor * i;
		
	Fin Para
	Escribir factor;
FinAlgoritmo
