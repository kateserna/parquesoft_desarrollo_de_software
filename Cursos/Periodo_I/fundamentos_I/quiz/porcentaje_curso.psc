Algoritmo porcentaje_curso
	//3) Un colegio desea saber qu� porcentaje de ni�os y qu� porcentaje de ni�as 
	//hay en el curso actual. Dise�ar un algoritmo para este prop�sito (recuerda 
	//que para calcular el porcentaje puedes hacer una regla de 3).
	
	definir ni�osPorcentaje, ni�asPorcentaje, numNi�os, numNi�as, totalCurso como real;
	
	Escribir " Digite numero de ni�os: ";
	Leer numNi�os;
	Escribir " Digite numero de ni�as: ";
	Leer numNi�as;
	
	totalCurso = numNi�os + numNi�as;
	ni�osPorcentaje = (numNi�os*100)/totalCurso;
	ni�asPorcentaje = (numNi�as*100)/totalCurso;
	
	Escribir "En el curso actual hay: ", ni�osPorcentaje, " ni�os y ", ni�asPorcentaje, " ni�as."; 

FinAlgoritmo
