// Juego simple que pide al usuario que adivine un numero en 10 intentos
Algoritmo Adivina_Numero
	
	definir intentos Como entero;
	Definir num_secreto Como Entero;
	definir num_ingresado Como entero;
	
	intentos <- 3;
	num_secreto <- azar(25)+1;
	
	Escribir 'Adivine el numero (de 1 a 25):';
	Leer num_ingresado;
	Mientras (num_secreto<>num_ingresado) Y (intentos>1) Hacer
		Si num_secreto>num_ingresado Entonces
			Escribir 'Muy bajo';
		SiNo
			Escribir 'Muy alto';
		FinSi
		intentos <- intentos-1;
		Escribir 'Le quedan ', intentos, ' intentos:';
		Leer num_ingresado;
	FinMientras
	Si num_secreto=num_ingresado Entonces
		Escribir 'Exacto! Usted adivino en ', 3-intentos, ' intentos.';
	SiNo
		Escribir 'El numero era: ', num_secreto;
	FinSi
FinAlgoritmo
