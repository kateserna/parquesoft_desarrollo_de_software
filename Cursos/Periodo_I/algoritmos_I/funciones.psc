
Funcion despedir (a)
	Escribir "Hasta luego ", a;
Fin Funcion

Funcion Saludar (a, b)
	Escribir "Hola Buenas noches ",a, " ", b;
Fin Funcion


Algoritmo funciones
	Definir nombre, apellido como texto;
	Escribir "Escriba su nombre y apellido";
	Leer nombre, apellido;
	
	Saludar(nombre, apellido);
	Saludar(apellido, nombre);
	Saludar(nombre, nombre);
	Saludar(apellido, apellido);
	Saludar("Jorge", apellido);
	despedir(nombre);
	
FinAlgoritmo
