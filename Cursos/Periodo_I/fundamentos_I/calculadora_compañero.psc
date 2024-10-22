Algoritmo sin_titulo
	
	definir num1, num2, opc, res como real;
	
	
	escribir "ingrese numero 1";
	Leer num1;
	escribir "ingrese nuemro 2";
	leer num2;
	
	
	
	Escribir "Ingrese una opcion";
	Escribir "1. Suma";
	Escribir "2. Resta";
	Escribir "3. Multiplicar";
	Escribir "4. Dividir";
	leer opc;
	
	
	
	Segun opc Hacer
		1:	res = num1 + num2;
			Escribir "la suma es ", res;
		2:	res = num1 - num2;
			Escribir "la resta es ", res;
		3:	res = num1 * num2;
			Escribir "la multiplicacion es ", res;
		4:	res = num1 / num2;
			Escribir "la Division es ", res;
			
		De Otro Modo:
			Escribir "Opcion Incorrecta";
	Fin Segun
	
FinAlgoritmo
