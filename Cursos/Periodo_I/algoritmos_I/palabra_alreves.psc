Algoritmo palabra_alreves
	definir palabra como texto;
	definir largo, i Como Entero;
	
	Escribir "Escriba una o mas palabras";
	Leer palabra;
	
	largo = Longitud(palabra);
	Para i <- largo -1  Hasta 0 Con Paso -1 Hacer
		Escribir SubCadena(palabra,i,i) Sin Saltar;
	Fin Para
	Escribir " ";
FinAlgoritmo
