Funcion pot <- calcular_potencia ( a,b )
	definir pot Como Entero;
	pot = a ^ b;
Fin Funcion

Algoritmo sin_titulo
	definir num1, num2, var1 Como Entero;
	Escribir "Ingrese dos numeros";
	leer num1;
	leer num2;
	var1 = calcular_potencia (num1, num2);
	Escribir "El resultado es: ", var1;
FinAlgoritmo
