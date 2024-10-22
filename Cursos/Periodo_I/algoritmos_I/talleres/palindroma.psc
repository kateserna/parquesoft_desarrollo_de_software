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

Algoritmo palin
	Definir palabra, palabra_sin_espacios, palabra_invertida como texto;
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
	
FinAlgoritmo