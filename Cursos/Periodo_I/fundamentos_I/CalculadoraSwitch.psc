Algoritmo CalculadoraSwitch
	
	Definir op Como Entero;
	Definir resultado, num1, num2 Como Real;
	Escribir 'Calculadora Switch';
	Escribir 'Selecciona una opci�n:';
	Escribir '1. Suma';
	Escribir '2. Resta';
	Escribir '3. Multiplicaci�n';
	Escribir '4. Divisi�n';
	Escribir 'Teclea el primer n�mero:';
	Leer num1;
	Escribir 'Teclea el segundo n�mero:';
	Leer num2;
	Escribir '�Qu� operaci�n quieres hacer?';
	Leer op;
	Seg�n op Hacer
		1: resultado <- num1+num2;
		2: resultado <- num1-num2;
		3: resultado <- num1*num2;
		4: resultado <- num1/num2;
		De Otro Modo:
			Escribir 'Elija una opci�n v�lida.';
	FinSeg�n
	Escribir 'El resultado de la operaci�n es:', resultado;
	
FinAlgoritmo
