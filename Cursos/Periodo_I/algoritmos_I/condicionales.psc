Algoritmo sin_titulo
	definir num1, num2, num3, prom como real;
	
	Escribir "Profe ingrese tres notas";
	leer num1, num2, num3;
	prom = (num1 + num2 + num3) / 3;
	
	si Prom >= 3.1 Entonces
		Escribir "Gano la materia";
	SiNo
		si prom <=2.5 Entonces
			Escribir "Perdio la materia";
		SiNo
			Escribir "Habilita la materia";
		FinSi
	FinSi
	
	Escribir "Promedio: ", prom;
	
FinAlgoritmo
