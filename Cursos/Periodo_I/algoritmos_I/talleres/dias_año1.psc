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


Algoritmo dias_año
	Definir numDias Como Entero;
	
	Escribir "Digite un numero de dias";
	leer numDias;
	
	Escribir numDias, " es: ", anio_mes_dia(numDias,1), " años, ", anio_mes_dia(numDias,2), " meses y ", anio_mes_dia(numDias,3) " días.";
	
	
	
FinAlgoritmo
