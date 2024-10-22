Algoritmo taller_3
	
	definir numX Como Real;
	definir numA Como Real;
	definir numB Como Real;
	definir a Como Real;
	definir b Como Real;
	definir c Como Real;
	
	//Desarrolla un algoritmo que lea un numero X y deduzca si X es un numero Positivo, Negativo.
	Escribir "Digite un numero positivo o negativo:";
	Leer numX;
	
	si (numX >= 0) Entonces
		Escribir "El numero es positivo";
	SiNo
		Escribir "El numero es negativo";
		
	FinSi
	
	//Desarrolla un algoritmo que lea dos (2) Numeros A y B e indique cual es el mayor y cual 
	//es el menor, los debe imprimir. Si los numeros son iguales debe indicar que son iguales.
	Escribir "Ingrese numero A:";
	Leer numA;
	Escribir "Ingrese numero B:";
	Leer numB;
	
	si (numA >= numB) Entonces //quitar el mayor o igual?
		si (numA > numB) Entonces
			Escribir numA , " Es mayor y " , numB , " es menor"; 
		SiNo
			Escribir "Los numeros son iguales";
		FinSi
	SiNo
		Escribir numA , " Es menor y " , numB , " es mayor";
		
	FinSi
	
	//Desarrolla un algoritmo que lea tres (3) Numeros A, B  y C; debe indicar ¿Cual de los 3 
	//numeros es el mayor de todos?

	Escribir "Ingrese numero A:";
	Leer a;
	Escribir "Ingrese numero B:";
	Leer b;
	Escribir "Ingrese numero C:";
	Leer c;
	
	si (a > b) Entonces
		si (a > c) Entonces
			Escribir a , " es mayor "; 
		SiNo
			Escribir c " es mayor ";
		FinSi
	SiNo
		si (b > c) Entonces
			Escribir b , " es mayor "; 
		SiNo
			Escribir c " es mayor ";
		FinSi
		
	FinSi
	
FinAlgoritmo
