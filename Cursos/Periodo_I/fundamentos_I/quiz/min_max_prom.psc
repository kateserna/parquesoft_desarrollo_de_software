
//8) Algoritmo que lea números enteros hasta teclear 0, y nos muestre el máximo, 
//el mínimo y la media de todos ellos. Piensa como debemos inicializar las variables.

Algoritmo sin_titulo
	Definir num, i, j, contador_num, suma_num, arreglo_numeros, aux, num_menor, num_mayor Como Entero;
	Definir promedio Como Real;
	
	Dimension arreglo_numeros[200];
	contador_num = 0;
	suma_num = 0;
	
	Escribir "Escribir numeros enteros, si tecle 0 sales del algoritmo";
	Leer num;
	
		Para i <- 0 Hasta 200 Con Paso 1 Hacer
			si num <> 0 Entonces
				arreglo_numeros[i] = num;
				Escribir arreglo_numeros[i];
				contador_num = contador_num +1;
				Escribir "Escribir numeros enteros, si tecle 0 sales del algoritmo";
				Leer num;
			FinSi
		Fin Para

	Escribir "Arreglo de numeros: ";
	Para i <- 0 Hasta contador_num-1 Con Paso 1 Hacer
		Escribir arreglo_numeros[i], " , ", Sin Saltar;
	Fin Para
	Escribir " ";
	
	Para i <- 0 Hasta contador_num -1 Con Paso 1 Hacer
		Para j <- i+1 Hasta contador_num -1 Con Paso 1 Hacer
			Si arreglo_numeros[i] > arreglo_numeros[j] Entonces
				aux = arreglo_numeros [i];
				arreglo_numeros[i] = arreglo_numeros[j];
				arreglo_numeros[j] = aux;
			Fin Si
		Fin Para
		Escribir arreglo_numeros[i], " , ", Sin Saltar;
	Fin Para
	
	Escribir " ";
	num_menor = arreglo_numeros[0];
	num_mayor = arreglo_numeros[contador_num-1];
	
	Escribir "El numero menor es: ", num_menor;
	Escribir "El numero mayor es: ", num_mayor;
	
	Para i <- 0 Hasta contador_num -1 Con Paso 1 Hacer
		suma_num = suma_num + arreglo_numeros[i];
	Fin Para
	
	promedio = suma_num/contador_num;
	Escribir promedio;
	
	Escribir " ";
FinAlgoritmo
