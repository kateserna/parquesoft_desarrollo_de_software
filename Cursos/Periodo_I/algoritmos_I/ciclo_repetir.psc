Algoritmo ciclo_repetir
	Definir num1, num2 Como Entero;
	
	Escribir "Escriba dos numeros";
	leer num1, num2;
	
	Repetir
		Escribir "El numero ", num1, " es menor que el numero ", num2;
		num1 = num1 + 1;
	Hasta Que num1 > num2
	
FinAlgoritmo
