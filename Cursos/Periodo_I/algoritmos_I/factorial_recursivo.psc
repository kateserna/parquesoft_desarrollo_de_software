Funcion retorno <- factor ( a )
	definir retorno Como Entero;
	Si a = 0 o a =1 Entonces
		retorno = 1;
	SiNo
		retorno = a * factor(a -1);
	Fin Si
Fin Funcion

Algoritmo factorial_recursivo
	Escribir factor(5);
FinAlgoritmo
