Algoritmo sin_titulo
	Definir a�oBisiesto Como Cadena;
	Definir n Como Entero;
	
	Repetir
		
		Escribir " Digite un a�o para saber si es bisiesto:";
		Leer a�oBisiesto;
		
		si Longitud(a�oBisiesto) < 1
			Escribir "No escribi� nada ... sapo!";
			n = -1;
		SiNo
			n = ConvertirANumero(a�oBisiesto);			
		FinSi
		
		Si n % 4 == 0 y n % 100 <> 0 Entonces
			Escribir n, " Es bisiesto";
		FinSi
	Hasta Que n == 0;
	
FinAlgoritmo
