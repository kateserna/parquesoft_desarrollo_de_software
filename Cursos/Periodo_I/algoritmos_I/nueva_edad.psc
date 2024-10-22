
Funcion anio1 <- nueva_edad
	definir anio1, anio0 Como Entero;
	anio0 = 2014;
	anio1 = calcular(anio0);
Fin Funcion

Funcion edad <- calcular ( a )
	Definir edad Como Entero;
	edad<- 2024-a;	
Fin Funcion

Algoritmo sin_titulo
	Definir anio Como Entero;
	Escribir "Ingresa el año en que naciste para calcular tu edad";
	Leer anio;
	Escribir "Tu edad en años es ", calcular(anio);
	Escribir "La nueva edad es ", nueva_edad;	
	
FinAlgoritmo
