Algoritmo num_par_impar
	//4)Realizar un algoritmo que dado un n�mero entero, visualice en pantalla 
	//si es par o impar. En el caso de ser 0, debe visualizar "el n�mero no es 
	//par ni impar" (para que un numero sea par, se debe dividir entre dos y 
	//que su resto sea 0)
	
	Definir num Como Entero;
	
	Escribir "Digite un numero entero:";
	Leer num;
	
	si num == 0 Entonces
		Escribir "El numero no es par, ni impar";
		
	SiNo
		Si num%2 == 0 Entonces
			Escribir num, " Es un n�mero par.";
			
		sino 
			Escribir num, " Es un n�mero impar.";
			
		FinSi
	FinSi
	
FinAlgoritmo
