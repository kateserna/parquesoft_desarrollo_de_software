Funcion ordenar_num ( a )
	definir arreglo, i, j, aux Como Entero;
	Dimension arreglo[a];
	
	Si a >= 1 Entonces
		Para i <- 0 Hasta a -1 Con Paso 1 Hacer
			arreglo[i] = Aleatorio(0,10);
			Escribir arreglo[i], " , ", Sin Saltar;
		Fin Para
		Escribir " ";
		
		Para i <- 0 Hasta a-1 Con Paso 1 Hacer
			Para j <- i+1 Hasta a-1 Con Paso 1 Hacer
				Si arreglo[i] > arreglo[j] Entonces
					aux = arreglo[i];
					arreglo[i] = arreglo[j];
					arreglo[j] = aux;
				Fin Si
			Fin Para
			Escribir arreglo[i], " , ", Sin Saltar;
		fin para
		Escribir " ";
	SiNo
		Escribir "Digite un número valido";
	Fin Si
	
Fin Funcion

Algoritmo num_aleatorios
	definir num2 Como Entero;
	Escribir "Escriba un número mayor que 0:";
	leer num2;
	si num2 >=1 Entonces
		ordenar_num(num2);		
	SiNo
		Escribir "Digite un número valido";
	FinSi
	
	
FinAlgoritmo
