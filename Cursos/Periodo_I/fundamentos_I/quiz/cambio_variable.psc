Algoritmo cambio_variable
	//Dadas dos variables numéricas A y B, que el usuario debe teclear, se pide realizar un algoritmo 
	//que intercambie los valores de ambas variables y muestre cuanto valen al final las dos variables 
	//(recuerda la asignación).
	
	Definir A, B, cambio Como Real;
	
	Escribir "Digite dos numeros";
	Leer A, B;
	
	cambio = A;
	A = B;
	B = cambio;
		
	Escribir "A es = ", A, " B es = ", B;
	
	
FinAlgoritmo
