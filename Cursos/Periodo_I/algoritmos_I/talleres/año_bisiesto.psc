Funcion anio <- bisiesto ( a )
	Definir anio Como Logico;
	Si a % 4 == 0 y a % 100 <> 0 Entonces
		anio = Verdadero;
	SiNo
		Si a % 100 == 0 y a % 400 == 0 Entonces
			anio = Verdadero;
		SiNo
			anio = Falso;
		Fin Si
	Fin Si
Fin Funcion

Algoritmo a�o_bisiesto

	Definir anioBisiesto Como Entero;
	
	Escribir " Digite un a�o para saber si es bisiesto:";
	Leer anioBisiesto;
	
	Escribir "El a�o ", anioBisiesto sin saltar;
	
	si bisiesto(anioBisiesto) = Verdadero Entonces
		Escribir " es bisiesto."; 
	SiNo
		Escribir " no es bisiesto."; 
	FinSi
	
	
FinAlgoritmo
