Funcion  mayor_y_menor ( num2 )
	definir arreglo_aleatorio, i, j, aux, num_menor, num_mayor Como Entero;
	Si num2 >= 1 Entonces
		Dimension arreglo_aleatorio[num2];
		
		Para i <- 0 Hasta num2 -1 Con Paso 1 Hacer
			arreglo_aleatorio[i] = Aleatorio(0,10);
			escribir arreglo_aleatorio[i] , ", ", Sin Saltar;
		Fin Para
		Escribir " ";
		
		num_menor = arreglo_aleatorio[0];
		num_mayor = arreglo_aleatorio[0];
		
		Para i <- 0 Hasta num2-2 Con Paso 1 Hacer
			
			Si num_menor > arreglo_aleatorio[i+1] Entonces
				num_menor = arreglo_aleatorio[i+1];
			Fin Si
			
			Si num_mayor < arreglo_aleatorio[i+1] Entonces
				num_mayor = arreglo_aleatorio[i+1];
			Fin Si
			
		Fin Para		
		
		Escribir " ";
		
		Escribir "El número menor es: ", num_menor;
		Escribir "El número mayor es: ", num_mayor;
		
		Escribir " ";
	SiNo
		Escribir "Digite un número valido";
	Fin Si
	
Fin Funcion



Algoritmo num_menor_mayor
	definir num3 Como Entero;
	Escribir "Escriba un número mayor que 0:";
	leer num3;
	si num3 >=1 Entonces
		mayor_y_menor(num3);
	FinSi
	
	
FinAlgoritmo