Algoritmo ciclo_para
	Definir num1, num2, i Como Entero;
	
	Escribir "Escriba dos numeros";
	leer num1, num2;
	
	Para i<-num1 Hasta num2 Con Paso 1 Hacer
		Escribir "El numero ", num1, " es menor que el numero ", num2;
		num1 = num1 + 1;
	Fin Para
	
FinAlgoritmo
