Funcion day <- dia_semana ( a )
	Definir day como texto;
	
	Si a == 1 Entonces
		day = "L�nes";
	SiNo
		Si a == 2 Entonces
			day = "Martes";
		SiNo
			Si a == 3 Entonces
				day = "Mi�rcoles";
			SiNo
				Si a == 4 Entonces
					day = "Jueves";
				SiNo
					Si a == 5 Entonces
						day = "Viernes";
					SiNo
						Si a == 6 Entonces
							day = "S�bado";
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
//Dise�e un algoritmo que solicite un n�mero por pantalla entre 1 y 7, 
//al obtenerlo escriba su correspondiente d�a de la semana as�: 
//DEBER SER SI Y SINO 1- Lunes 2- Martes 3- Mi�rcoles 4- Jueves 
//5- Viernes 6- S�bado 7- Domingo Exprese el algoritmo usando Pseudoc�digo
	definir diaSemana Como Entero;
	
	Escribir "Digite un numero entre 1 y 7";
	Leer diaSemana;
	
	Si diaSemana > 0 Y diaSemana < 8 Entonces
		Escribir "El d�a ", diaSemana, " es ", dia_semana(diaSemana);
	SiNo
		Escribir "N�mero no v�lido";
	Fin Si
	
	
	
	
FinAlgoritmo
