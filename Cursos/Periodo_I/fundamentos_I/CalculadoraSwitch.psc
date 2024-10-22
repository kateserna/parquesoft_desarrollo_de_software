Algoritmo CalculadoraSwitch
	
	Definir op Como Entero;
	Definir resultado, num1, num2 Como Real;
	Escribir 'Calculadora Switch';
	Escribir 'Selecciona una opción:';
	Escribir '1. Suma';
	Escribir '2. Resta';
	Escribir '3. Multiplicación';
	Escribir '4. División';
	Escribir 'Teclea el primer número:';
	Leer num1;
	Escribir 'Teclea el segundo número:';
	Leer num2;
	Escribir '¿Qué operación quieres hacer?';
	Leer op;
	Según op Hacer
		1: resultado <- num1+num2;
		2: resultado <- num1-num2;
		3: resultado <- num1*num2;
		4: resultado <- num1/num2;
		De Otro Modo:
			Escribir 'Elija una opción válida.';
	FinSegún
	Escribir 'El resultado de la operación es:', resultado;
	
FinAlgoritmo
