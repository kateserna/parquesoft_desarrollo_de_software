Funcion dibujar( a )
	Definir i, j Como Entero;
	Si a <= 0 Entonces
		Escribir "Escriba un n�mero positivo";
	SiNo
		Para i <- 0 Hasta a -1 Con Paso 1 Hacer
			Escribir "";
			Para j <- 0 Hasta a -1 Con Paso 1 Hacer
				Escribir "*", Sin Saltar; 
			Fin Para
		Fin Para
		
	Fin Si
	
	Escribir "";
Fin Funcion

Algoritmo cuadrado
	 
	Definir num Como Entero;
	Escribir "Digite un n�mero entero:";
	Leer num;
	
	dibujar(num);
	
FinAlgoritmo
