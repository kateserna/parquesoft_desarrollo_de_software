Algoritmo potencia_raiz
	//2)Realizar un algoritmo que lea un número por teclado. En caso de que ese número sea 0 
	//o menor que 0, se saldrá del programa imprimiendo antes un mensaje de error. Si es mayor 
	//que 0, se deberá calcular su cuadrado y la raiz cuadrada del mismo,
	//visualizando el numero que ha tecleado el usuario y su resultado («Del numero X, su 
	//potencia es X y su raiz X» ). 
	//Para calcular la raiz cuadrada se puede usar la función interna RAIZ(X)  o con una potencia de 0,5.
	
	Definir x, potenciaX, raizX Como Real;
	
	Escribir "Digite un numero: ";
	Leer x;
	
	Si x > 0 Entonces
		potenciaX = x^2;
		raizX= raiz(x); 
		escribir "Del numero ", x , " su potencia es ", potenciaX, " y su raiz es ", raizX ;
	SiNo
		Escribir "Error";
	Fin Si
FinAlgoritmo
