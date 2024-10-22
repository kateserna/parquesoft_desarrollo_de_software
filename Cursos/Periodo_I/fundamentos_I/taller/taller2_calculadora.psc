Algoritmo calculadora
	definir num1 Como Real;
	definir num2 Como Real;
	Definir operacion Como Entero;
	definir resultado Como Real;
	
	
	Escribir "Digite primer numero para la operacion";
	leer num1;
	
	Escribir "Digite segundo numero para la operacion";
	leer num2;
	
	Escribir "Digite que operacion desea realizar:";
	Escribir "1. Suma";
	Escribir "2. Resta";
	Escribir "3. Multiplicación";
	Escribir "4. División";
	Leer operacion;
	
	Segun operacion Hacer
		1:
			resultado = num1 + num2;
			Escribir "Suma = ", resultado;
		2:
			resultado = num1 - num2;
			Escribir "Resta = ", resultado;
		3:
			resultado = num1 * num2;
			Escribir "Multiplicacion = ", resultado;
		4:
			Si num2 == 0.0 Entonces
				Escribir "Esta operacion no se puede ejecutar";
			SiNo
				resultado = num1 / num2;
				Escribir "Division = ", resultado;
			Fin Si
			
		De Otro Modo:
			Escribir "Esta opcion no es valida";
	Fin Segun
	
FinAlgoritmo
