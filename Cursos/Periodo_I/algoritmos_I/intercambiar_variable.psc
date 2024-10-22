Algoritmo intercambiar_variable
	//Solicitar dos "variables" numericas (A, B), por pantalla, el usuario debe teclearlas. 
	// Realice un algoritmo que intercambie los valores de estas variables y muestre cuanto valen al final las dos variables.
	//Recuerde la asignacion.
	definir a, b, aux Como Entero;
	
	Escribir "Ingrese dos numero:";
	Leer a, b;
	aux = a;
	a = b;
	b = aux;
	
	escribir " a = ", a, "  ", "b = ", b;
	
FinAlgoritmo
