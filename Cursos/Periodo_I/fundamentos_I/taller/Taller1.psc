Algoritmo taller1
	
	//Area de un cuadrado	
	definir areaCuadrado Como Real;
	definir ladoCuadrado Como Real;
	
	Escribir "Ingresar valor del lado en cm:";
	Leer ladoCuadrado;
	
	areaCuadrado = ladoCuadrado*ladoCuadrado;
	Escribir "El area del cuadrado es: ", areaCuadrado;
	
	//Convertir dolares a pesos
	definir PESOS_POR_DOLAR Como Entero;
	definir dolaresCambiar Como Entero;
	definir dolarConvertidoPesos Como Entero;
	
	PESOS_POR_DOLAR = 4036;
	Escribir " Ingresar el numero de dolares que desea cambiar:" ;
	Leer dolaresCambiar;
	
	dolarConvertidoPesos = PESOS_POR_DOLAR*dolaresCambiar;
	Escribir "El total en pesos es de:", dolarConvertidoPesos;
	
FinAlgoritmo
