Funcion edad <- calcula ( a )
	Definir edad Como Entero;
	edad = 2024 - a;
Fin Funcion

Algoritmo calcular_edad
	
	Definir anio, var1, var2 Como Entero;
	Escribir "Digite su a�o de nacimiento:";
	Leer anio;
	Escribir "Su edad es ", calcula(anio), " a�os";
	var1 = calcula(anio);
	var2 = calcula(1000);
	
	Escribir "Var1 ", var1;
	Escribir "Var2 ", var2;
	
FinAlgoritmo