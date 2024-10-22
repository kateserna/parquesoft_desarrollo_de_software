Algoritmo orden_invertido
	definir num2, arreglo_aleatorio, i, j, aux, arreglo_invertido Como Entero;
	Escribir "Escriba un numero:";
	leer num2;
	
	Si num2 >= 1 Entonces
		Dimension arreglo_aleatorio[num2];
		Dimension arreglo_invertido[num2];
		
		Para i <- 0 Hasta num2 -1 Con Paso 1 Hacer
			arreglo_aleatorio[i] = Aleatorio(0,10);
			escribir arreglo_aleatorio[i] , ", ", Sin Saltar;
		Fin Para
		Escribir " ";
		
		Para i <- 0 Hasta num2-1 Con Paso 1 Hacer
			arreglo_invertido[i] = arreglo_aleatorio[(num2 -1) - i];
			Escribir arreglo_invertido[i], ", ", Sin Saltar;
		Fin Para
		
	SiNo
		Escribir "Digite un número valido";
	Fin Si
		
	Escribir " ";
FinAlgoritmo

