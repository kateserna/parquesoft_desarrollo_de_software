Funcion invertir_arreglo ( num2 )
	Definir arreglo_aleatorio, arreglo_invertido, i Como Entero;
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
Fin Funcion

Algoritmo orden_invertido
	definir num4 Como Entero;
	Escribir "Escriba un número mayor que 0:";
	leer num4;
	si num4 >=1 Entonces
		invertir_arreglo(num4);
	FinSi
	
	
FinAlgoritmo

