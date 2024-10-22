Algoritmo porcentaje_curso
	//3) Un colegio desea saber qué porcentaje de niños y qué porcentaje de niñas 
	//hay en el curso actual. Diseñar un algoritmo para este propósito (recuerda 
	//que para calcular el porcentaje puedes hacer una regla de 3).
	
	definir niñosPorcentaje, niñasPorcentaje, numNiños, numNiñas, totalCurso como real;
	
	Escribir " Digite numero de niños: ";
	Leer numNiños;
	Escribir " Digite numero de niñas: ";
	Leer numNiñas;
	
	totalCurso = numNiños + numNiñas;
	niñosPorcentaje = (numNiños*100)/totalCurso;
	niñasPorcentaje = (numNiñas*100)/totalCurso;
	
	Escribir "En el curso actual hay: ", niñosPorcentaje, " niños y ", niñasPorcentaje, " niñas."; 

FinAlgoritmo
