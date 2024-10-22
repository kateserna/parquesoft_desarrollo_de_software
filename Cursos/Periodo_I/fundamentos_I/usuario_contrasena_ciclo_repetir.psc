Algoritmo usuario_contrasena
	
	definir login Como Caracter;
	definir pass Como Caracter;
	definir usuario Como Caracter;
	definir contrasena Como Caracter;
	
	login = "abc@gmail.com";
	pass= "123";
	
	Repetir
		escribir "Digite su login";
		leer usuario;
		escribir "Digite su password";
		leer contrasena;
		
		si usuario==login y pass == contrasena Entonces
			Escribir "Usuario correcto";
		SiNo
			Escribir  "Usuario o contraseña no valida";
		FinSi
		Esperar Tecla;
		Limpiar Pantalla;
	Hasta Que usuario==login y pass == contrasena
	
	
	
FinAlgoritmo
	