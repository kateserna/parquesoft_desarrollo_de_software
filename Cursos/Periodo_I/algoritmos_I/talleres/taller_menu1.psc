Funcion anio <- bisiesto ( a )
	Definir anio Como Logico;
	Si a % 4 == 0 y a % 100 <> 0 Entonces
		anio = Verdadero;
	SiNo
		Si a % 100 == 0 y a % 400 == 0 Entonces
			anio = Verdadero;
		SiNo
			anio = Falso;
		Fin Si
	Fin Si
Fin Funcion

Funcion day <- dia_semana ( a )
	Definir day como texto;
	Si a == 1 Entonces
		day = "Lúnes";
	SiNo
		Si a == 2 Entonces
			day = "Martes";
		SiNo
			Si a == 3 Entonces
				day = "Miércoles";
			SiNo
				Si a == 4 Entonces
					day = "Jueves";
				SiNo
					Si a == 5 Entonces
						day = "Viernes";
					SiNo
						Si a == 6 Entonces
							day = "Sábado";
						SiNo
							Si a == 7 Entonces
								day = "Domingo";
							SiNo
								day = "Número no válido";
							FinSi
						FinSi	
					FinSi
				FinSi
			FinSi
		FinSi	
	Fin Si
Fin Funcion

Funcion retorno <- anio_mes_dia( a, seleccion )
	Definir retorno, anio, modAnio, mes, dia Como entero;
	
	modAnio = a % 365;
	
	Segun seleccion Hacer
		1:
			retorno = trunc (a/365);
		2:
			retorno = trunc ( modAnio / 30);
		3:
			retorno = modAnio % 30;
	Fin Segun	
Fin Funcion

Funcion palabra_derecho  <- quitar_espacios ( a )
	Definir largo, i Como Entero;
	Definir palabra_derecho Como Caracter;
	largo = Longitud(a);
	palabra_derecho = "";
	Para i <- 0  Hasta largo-1 Con Paso 1 Hacer
		Si SubCadena(a,i,i) <> " " Entonces
			palabra_derecho = palabra_derecho + SubCadena(a,i,i);
		Fin Si
	Fin Para
Fin Funcion

Funcion alreves <- palabra_alreves ( a )
	Definir i, largo Como Entero;
	Definir  alReves Como Caracter;
	alreves = "";
	largo = Longitud(a);
	Para i <- largo -1  Hasta 0 Con Paso -1 Hacer
		alReves = alReves + SubCadena(a,i,i);
	Fin Para
Fin Funcion

Funcion retorno <- palindroma ( a, b )
	Definir retorno Como Logico;
	Si a = b Entonces
		retorno = verdadero;
	SiNo
		retorno = Falso;
	Fin Si
Fin Funcion

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

Funcion dibujar( a )
	Definir i, j Como Entero;
	Si a <= 0 Entonces
		Escribir "Escriba un número positivo";
	SiNo
		Para i <- 0 Hasta a -1 Con Paso 1 Hacer
			Escribir "";
			Para j <- 0 Hasta a -1 Con Paso 1 Hacer
				Escribir "*", Sin Saltar; 
			Fin Para
		Fin Para
		
	Fin Si
	
	Escribir "";
Fin Funcion

Funcion ordenar_num ( a )
	definir arreglo, i, j, aux Como Entero;
	Dimension arreglo[a];
	
	Si a >= 1 Entonces
		Para i <- 0 Hasta a -1 Con Paso 1 Hacer
			arreglo[i] = Aleatorio(0,10);
			Escribir arreglo[i], " , ", Sin Saltar;
		Fin Para
		Escribir " ";
		
		Para i <- 0 Hasta a-1 Con Paso 1 Hacer
			Para j <- i+1 Hasta a-1 Con Paso 1 Hacer
				Si arreglo[i] > arreglo[j] Entonces
					aux = arreglo[i];
					arreglo[i] = arreglo[j];
					arreglo[j] = aux;
				Fin Si
			Fin Para
			Escribir arreglo[i], " , ", Sin Saltar;
		fin para
		Escribir " ";
	SiNo
		Escribir "Digite un número valido";
	Fin Si
	
Fin Funcion

Funcion  mayor_y_menor ( num2 )
	definir arreglo_aleatorio, i, j, aux, num_menor, num_mayor Como Entero;
	Si num2 >= 1 Entonces
		Dimension arreglo_aleatorio[num2];
		
		Para i <- 0 Hasta num2 -1 Con Paso 1 Hacer
			arreglo_aleatorio[i] = Aleatorio(0,10);
			escribir arreglo_aleatorio[i] , ", ", Sin Saltar;
		Fin Para
		Escribir " ";
		
		num_menor = arreglo_aleatorio[0];
		num_mayor = arreglo_aleatorio[0];
		
		Para i <- 0 Hasta num2-2 Con Paso 1 Hacer
			
			Si num_menor > arreglo_aleatorio[i+1] Entonces
				num_menor = arreglo_aleatorio[i+1];
			Fin Si
			
			Si num_mayor < arreglo_aleatorio[i+1] Entonces
				num_mayor = arreglo_aleatorio[i+1];
			Fin Si
			
		Fin Para		
		
		Escribir " ";
		
		Escribir "El número menor es: ", num_menor;
		Escribir "El número mayor es: ", num_mayor;
		
		Escribir " ";
	SiNo
		Escribir "Digite un número valido";
	Fin Si	
Fin Funcion

Funcion invertir_arreglo ( num2 )
	Definir arreglo_aleatorio, arreglo_invertido, i Como Entero;
	Si num2 >= 1 Entonces
		Dimension arreglo_aleatorio[num2];
		Dimension arreglo_invertido[num2];
		
		Para i <- 0 Hasta num2 -1 Con Paso 1 Hacer
			arreglo_aleatorio[i] = Aleatorio(0,10);
			escribir arreglo_aleatorio[i] , ", ", Sin Saltar;
		Fin Para
		Escribir " ";
		
		Para i <- 0 Hasta num2-1 Con Paso 1 Hacer
			arreglo_invertido[i] = arreglo_aleatorio[(num2 -1) - i];
			Escribir arreglo_invertido[i], ", ", Sin Saltar;
		Fin Para
		
	SiNo
		Escribir "Digite un número valido";
	Fin Si
	
	Escribir " ";
Fin Funcion

Algoritmo taller_menu
	Definir menu, anioBisiesto, diaSemana, numDias, empleados, num, num2, num3, num4 Como Entero;	
	Definir palabra, palabra_sin_espacios, palabra_invertida como texto;
	
	Repetir
		Escribir "Seleccione un número del 1 al 9 para ejecutar un algoritmo o 10 para salir:";
		leer menu;
		
		Segun menu Hacer
			1:
				Escribir "Usted a elejido la opción número 1:";
				Escribir "El algoritmo solicita un año por pantalla, y dice si el año es bisiesto o no.";
				Escribir "Presione enter para continuar";
				Esperar Tecla;
				Limpiar Pantalla;
				
				Escribir " Digite un año para saber si es bisiesto:";
				Leer anioBisiesto;
				
				Si anioBisiesto >=1 Entonces
					Escribir "El año ", anioBisiesto sin saltar;
					
					si bisiesto(anioBisiesto) = Verdadero Entonces
						Escribir " es bisiesto."; 
					SiNo
						Escribir " no es bisiesto."; 
					FinSi
				SiNo
					Escribir "Ingrese un numero mayor a 0";
				Fin Si
				
				Esperar Tecla;
				Limpiar Pantalla;
				
			2:
				Escribir "Usted a elejido la opción número 2:";
				Escribir "El algoritmo solicita un número por pantalla entre 1 y 7, y escribe el día de la semana correspondiente";
				Escribir "Presione enter para continuar";
				Esperar Tecla;
				Limpiar Pantalla;
				
				Escribir "Digite un numero entre 1 y 7";
				Leer diaSemana;
				
				Si diaSemana > 0 Y diaSemana < 8 Entonces
					Escribir "El día ", diaSemana, " es ", dia_semana(diaSemana);
				SiNo
					Escribir "Número no válido";
				Fin Si
	
				Esperar Tecla;
				Limpiar Pantalla;
				
			3:
				Escribir "Usted a elejido la opción número 3:";
				Escribir "El algoritmo solicita un número de días, y determina cuántos años, meses, y días conforman.";
				Escribir "Presione enter para continuar";
				Esperar Tecla;
				Limpiar Pantalla;
				
				Escribir "Digite un numero de dias";
				leer numDias;
				
				Si numDias >=1 Entonces
					Escribir numDias, " es: ", anio_mes_dia(numDias,1), " años, ", anio_mes_dia(numDias,2), " meses y ", anio_mes_dia(numDias,3) " días.";
				SiNo
					Escribir "Ingrese un numero mayor a 0";
				Fin Si
				
				Esperar Tecla;
				Limpiar Pantalla;
				
			4:
				Escribir "Usted a elejido la opción número 4:";
				Escribir "El algoritmo solicita una o más palabras, cuenta los caracteres de la cadena sin espacios, muestra la cadena al revés y dice si es palíndroma";
				Escribir "Presione enter para continuar";
				Esperar Tecla;
				Limpiar Pantalla;
				
				Escribir "Digite una palabra o mas palabras";
				Leer palabra;
				palabra_sin_espacios = quitar_espacios(palabra);
				
				Escribir "La cadena tiene ", Longitud(palabra_sin_espacios), " caracteres sin contar los espacio" ;
				palabra_invertida = palabra_alreves( palabra_sin_espacios);
				
				Escribir palabra_invertida;
				
				Si palindroma(palabra_sin_espacios, palabra_invertida) = Verdadero Entonces
					Escribir"La palabra es palindroma";
				SiNo
					Escribir "La palabra no es palindroma";
				Fin Si
				
				Escribir " ";
				
				Esperar Tecla;
				Limpiar Pantalla;
				
			5:
				Escribir "Usted a elejido la opción número 5:";
				Escribir "El algoritmo solicita el número de empleados y sus datos. Muestra la información de cada empleado.";
				Escribir "Presione enter para continuar";
				Esperar Tecla;
				Limpiar Pantalla;
				
				Escribir "Ingrese el numero de empleados de la empresa";
				Leer empleados;
				
				si empleados >=1 Entonces
					datos_empleados(empleados);
				SiNo
					Escribir "Ingrese un numero mayor a 0";
				FinSi
				
				
				Esperar Tecla;
				Limpiar Pantalla;
				
			6:	Escribir "Usted a elejido la opción número 6:";
				Escribir "El algoritmo solicita un número (entero) y con este crea un cuadrado de asteriscos.";
				Escribir "Presione enter para continuar";
				Esperar Tecla;
				Limpiar Pantalla;
				
				Escribir "Digite un número entero:";
				Leer num;
				
				dibujar(num);
				
				Esperar Tecla;
				Limpiar Pantalla;
				
			7:	Escribir "Usted a elejido la opción número 7:";
				Escribir "El algoritmo solicita un número (entero) y con este crea un arreglo de N posiciones con numeros aleatorios, luego ordena el arreglo de menor a mayor y lo muestra";
				Escribir "Presione enter para continuar";
				Esperar Tecla;
				Limpiar Pantalla;
				
				Escribir "Escriba un número mayor que 0:";
				leer num2;
				si num2 >=1 Entonces
					ordenar_num(num2);		
				SiNo
					Escribir "Digite un número valido";
				FinSi
				
				Esperar Tecla;
				Limpiar Pantalla;
			8:
				Escribir "Usted a elejido la opción número 8:";
				Escribir "El algoritmo solicita un número (entero) y con este crea un arreglo de N posiciones con numeros aleatorios, luego muestra los numeros menor y mayor del arreglo";
				Escribir "Presione enter para continuar";
				Esperar Tecla;
				Limpiar Pantalla;
				
				Escribir "Escriba un número mayor que 0:";
				leer num3;
				si num3 >=1 Entonces
					mayor_y_menor(num3);
				FinSi
				
				Esperar Tecla;
				Limpiar Pantalla;
			9:
				Escribir "Usted a elejido la opción número 9:";
				Escribir "El algoritmo solicita un número (entero) y con este crea un arreglo de N posiciones con numeros aleatorios, luego invierte el orden de los elementos y muestra el arreglo invertido";
				Escribir "Presione enter para continuar";
				Esperar Tecla;
				Limpiar Pantalla;
				
				Escribir "Escriba un número mayor que 0:";
				leer num4;
				
				si num4 >=1 Entonces
					invertir_arreglo(num4);
				FinSi
				
				Esperar Tecla;
				Limpiar Pantalla;
			10:
				Escribir "Gracias vuelva pronto";
				Escribir "Presione enter para continuar";
				Esperar Tecla;
				
			De Otro Modo:
				Escribir "Porfavor escoja una opción válida";
				Escribir "Presione enter para continuar";
				Esperar Tecla;
				Limpiar Pantalla;
				
		Fin Segun
		
	Hasta Que menu ==10;
	
FinAlgoritmo
