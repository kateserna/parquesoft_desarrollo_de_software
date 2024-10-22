//Convertir el algoritmo de CalculadoraSwitch a funciones.
// funcion sumar, restar, multiplicar, dividir, , mostrar menu, escoger operacion.
// todo lo que pueda ser una funcion convertirlo en funcion.
Funcion menu ( operacion, a, b )
	Según operacion Hacer
		1: Escribir suma(a, b);
		2: Escribir resta(a, b);
		3: Escribir multiplicacion(a, b);
		4: Escribir division(a, b);
	De Otro Modo:
		Escribir 'Elija una opción válida.';
	FinSegún
Fin Funcion

Funcion resultado <- suma ( a, b )
	Definir resultado Como Real;
	resultado = a + b ;
Fin Funcion

Funcion resultado <- resta ( num1, num2 )
	Definir resultado Como Real;
	resultado = num1 - num2 ;
Fin Funcion

Funcion resultado <- multiplicacion ( num1, num2 )
	Definir resultado Como Real;
	resultado = num1 * num2 ;
Fin Funcion

Funcion resultado <- division ( num1, num2 )
	Definir resultado Como Real;
	Si num2 == 0.0 Entonces
		Escribir "Esta operacion no se puede ejecutar";
	SiNo
		resultado = num1 / num2;
	Fin Si
Fin Funcion

Algoritmo calculadora_funcion
	Definir op Como Entero;
	Definir resultado, num1, num2 Como Real;
	
	Escribir 'Calculadora Switch y Funciones';
	Escribir 'Teclea el primer número:';
	Leer num1;
	Escribir 'Teclea el segundo número:';
	Leer num2;
	Escribir 'Selecciona que operacion desea realizar:';
	Escribir '1. Suma';
	Escribir '2. Resta';
	Escribir '3. Multiplicación';
	Escribir '4. División';
	Leer op;
	menu(op, num1, num2);
	
FinAlgoritmo
