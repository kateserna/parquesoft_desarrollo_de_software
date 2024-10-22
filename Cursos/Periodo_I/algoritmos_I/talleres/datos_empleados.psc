Funcion datos_empleados ( a )
	Definir cedula, edad, salario, i Como Entero;
	definir nombre, apellido, cargo Como Caracter;
	
	Si a <=0 Entonces
		Escribir "Digite un numero valido";
	SiNo
		Dimension nombre[a];
		Dimension apellido[a];
		Dimension cedula[a];
		Dimension edad[a];
		Dimension salario[a];
		Dimension cargo[a];
		
		Para i<- 0 Hasta a-1 Con Paso 1 Hacer
			Escribir "Empleado ", i+1, ":";
			Escribir "Nombre:";
			Leer nombre[i];
			Escribir "Apellido:";
			Leer apellido[i];
			Escribir "Cedula (sin puntos):";
			Leer cedula[i];
			Escribir "Edad:";
			Leer edad[i];
			Escribir "Salario:";
			Leer salario[i];
			Escribir "Cargo:";
			Leer cargo[i];
		Fin Para
		
		Para i<- 0 Hasta a-1 Con Paso 1 Hacer
			Escribir "Datos empleado ", i+1, ":";
			Escribir "Nombre: ", nombre[i], ", ", "Apellido: ", apellido[i], ", ", "Cedula: ", cedula[i], ", ", "Edad: ", edad[i], ", ", "Salario: ", salario[i], ", ", "Cargo: ", cargo[i];
		Fin Para
	Fin Si
Fin Funcion



Algoritmo sin_titulo
	
	Definir empleados Como Entero;

	Escribir "Ingrese el numero de empleados de la empresa";
	Leer empleados;
	
	datos_empleados(empleados);
	
	
	
FinAlgoritmo
