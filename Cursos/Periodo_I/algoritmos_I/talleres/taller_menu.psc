Algoritmo taller_menu
	Definir menu Como Entero;
	Definir anioBisiesto Como Entero;
	Definir diaSemana Como Entero;
	Definir anio, modAnio, mes, dia, numDias  Como entero;
	Definir palabra, palabra_derecho, alReves Como texto;
	Definir largo, h, largo2 Como entero;
	Definir empleados, cedula, edad, salario, i Como Entero;
	definir nombre, apellido, cargo Como Caracter;
	Definir num, j, k Como Entero;
	
	Repetir
		Escribir "Seleccione un número del 1 al 6 para ejecutar un algoritmo o 9 para salir:";
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

				Si anioBisiesto % 4 == 0 y anioBisiesto % 100 <> 0 Entonces
					Escribir anioBisiesto, " Es bisiesto";
				SiNo
					Si anioBisiesto % 100 == 0 y anioBisiesto % 400 == 0 Entonces
						Escribir anioBisiesto, " Es bisiesto";
					SiNo
						Escribir anioBisiesto, " No es bisiesto";
					Fin Si
				Fin Si
				Esperar Tecla;
				Limpiar Pantalla;
				
			2:
				Escribir "Usted a elejido la opción número 2:";
				Escribir "El algoritmo solicita un número por pantalla entre 1 y 7, y escribe el día de la semana correspondiente";
				Escribir "Presione enter para continuar";
				Esperar Tecla;
				Limpiar Pantalla;
				
				Escribir "Digite un número entre 1 y 7";
				Leer diaSemana;
				
				Si diaSemana == 1 Entonces
					Escribir "Lunes";
				SiNo
					Si diaSemana == 2 Entonces
						Escribir "Martes";
					SiNo
						Si diaSemana == 3 Entonces
							Escribir "Miércoles";
						SiNo
							Si diaSemana == 4 Entonces
								Escribir "Jueves";
							SiNo
								Si diaSemana == 5 Entonces
									Escribir "Viernes";
								SiNo
									Si diaSemana == 6 Entonces
										Escribir "Sábado";
									SiNo
										Si diaSemana == 7 Entonces
											Escribir "Domingo";
										SiNo
											Escribir "Número no valido";
										FinSi
									FinSi	
								FinSi
							FinSi
						FinSi
					FinSi	
				Fin Si
				
				Esperar Tecla;
				Limpiar Pantalla;
				
			3:
				Escribir "Usted a elejido la opción número 3:";
				Escribir "El algoritmo solicita un número de días, y determina cuántos años, meses, y días conforman.";
				Escribir "Presione enter para continuar";
				Esperar Tecla;
				Limpiar Pantalla;
				
				Escribir "Digite un número de días";
				leer numDias;
				
				anio = trunc (numDias/365);
				modAnio = numDias % 365;
				mes = trunc ( modAnio / 30);
				dia = modAnio % 30;
				
				Escribir numDias, " es: ", anio, " años, ", mes, " meses y ", dia, " días.";
				
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
				
				largo = Longitud(palabra);
				palabra_derecho = "";
				alReves = "";
				
				Para h <- 0  Hasta largo-1 Con Paso 1 Hacer
					Si SubCadena(palabra,h,h) = " " Entonces
						palabra_derecho = palabra_derecho + "";
					SiNo
						palabra_derecho = palabra_derecho + SubCadena(palabra,h,h);
					Fin Si
				Fin Para
				
				Para h <- largo -1  Hasta 0 Con Paso -1 Hacer					
					Si SubCadena(palabra,h,h) = " " Entonces
						alReves = alReves + "";
					SiNo
						alReves = alReves + SubCadena(palabra,h,h);
					Fin Si					
				Fin Para
				
				largo2 = Longitud(alReves);
				Escribir "La cadena tiene ", largo2, " caracteres sin contar los espacio" ; 
				Escribir " ";
				Escribir alreves;
				Si palabra_derecho = alreves Entonces
					escribir "La palabra es palindroma";
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
				
				Si empleados <=0 Entonces
					Escribir "Digite un numero valido";
				SiNo
					Dimension nombre[empleados];
					Dimension apellido[empleados];
					Dimension cedula[empleados];
					Dimension edad[empleados];
					Dimension salario[empleados];
					Dimension cargo[empleados];
					
					Para i<- 0 Hasta empleados-1 Con Paso 1 Hacer
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
					
					Para i<- 0 Hasta empleados-1 Con Paso 1 Hacer
						Escribir "Datos empleado ", i+1, ":";
						Escribir "Nombre: ", nombre[i], ", ", "Apellido: ", apellido[i], ", ", "Cedula: ", cedula[i], ", ", "Edad: ", edad[i], ", ", "Salario: ", salario[i], ", ", "Cargo: ", cargo[i];
					Fin Para
				Fin Si
				
				Esperar Tecla;
				Limpiar Pantalla;
				
			6:	Escribir "Usted a elejido la opción número 6:";
				Escribir "El algoritmo solicita un número (entero) y con este crea un cuadrado de asteriscos.";
				Escribir "Presione enter para continuar";
				Esperar Tecla;
				Limpiar Pantalla;
				
				Escribir "Digite un numero entero:";
				Leer num;
				
				Si num <= 0 Entonces
					Escribir "Escriba un numero positivo";
				SiNo
					Para j <- 0 Hasta num -1 Con Paso 1 Hacer
						Escribir "";
						Para k <- 0 Hasta num -1 Con Paso 1 Hacer
							Escribir "*", Sin Saltar; 
						Fin Para
					Fin Para
					
				Fin Si
				
				Escribir "";
				
				Esperar Tecla;
				Limpiar Pantalla;
			9:
				Escribir "Gracias vuelva pronto";
				Escribir "Presione enter para continuar";
				Esperar Tecla;
				
			De Otro Modo:
				Escribir "Porfavor escoja una opción válida";
				Escribir "Presione enter para continuar";
				Esperar Tecla;
				Limpiar Pantalla;
				
		Fin Segun
		
	Hasta Que menu ==9;
	
FinAlgoritmo


