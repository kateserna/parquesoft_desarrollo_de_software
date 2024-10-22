Algoritmo sin_titulo
	Definir añoBisiesto Como Cadena;
	Definir n Como Entero;
	
	Repetir
		
		Escribir " Digite un año para saber si es bisiesto:";
		Leer añoBisiesto;
		
		si Longitud(añoBisiesto) < 1
			Escribir "No escribió nada ... sapo!";
			n = -1;
		SiNo
			n = ConvertirANumero(añoBisiesto);			
		FinSi
		
		Si n % 4 == 0 y n % 100 <> 0 Entonces
			Escribir n, " Es bisiesto";
		FinSi
	Hasta Que n == 0;
	
FinAlgoritmo
