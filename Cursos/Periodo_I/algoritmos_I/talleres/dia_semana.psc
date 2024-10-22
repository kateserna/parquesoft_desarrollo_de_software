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
							FinSi
						FinSi	
					FinSi
				FinSi
			FinSi
		FinSi	
	Fin Si
	
	
Fin Funcion

Algoritmo semana
//Diseñe un algoritmo que solicite un número por pantalla entre 1 y 7, 
//al obtenerlo escriba su correspondiente día de la semana así: 
//DEBER SER SI Y SINO 1- Lunes 2- Martes 3- Miércoles 4- Jueves 
//5- Viernes 6- Sábado 7- Domingo Exprese el algoritmo usando Pseudocódigo
	definir diaSemana Como Entero;
	
	Escribir "Digite un numero entre 1 y 7";
	Leer diaSemana;
	
	Si diaSemana > 0 Y diaSemana < 8 Entonces
		Escribir "El día ", diaSemana, " es ", dia_semana(diaSemana);
	SiNo
		Escribir "Número no válido";
	Fin Si
	
	
	
	
FinAlgoritmo
