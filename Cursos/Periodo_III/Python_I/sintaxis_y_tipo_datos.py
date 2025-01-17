#esto es un comentario
"es otro comentario"

'''
esto es comentario en bloque 
o multilinea
'''

print ("Bienvenidos")
print("A mis primeras lineas de programacion")
print("En Python")
'''
print(3+4)

#Tipo de dato entero o largo:
numero = 15
print(numero, type(numero))

#Tipo de dato flotante o float:
numerof = 15.5
print(numerof, type(numerof))

#Tipo de dato numero complejo o complex:
numeroc = 15 + 6j
print(numeroc, type(numeroc))

#Tipo de dato string:
nombre = "jose"
print(nombre, type(nombre))

#Tipo de dato booleano:
ver_fal = 3 == 4
print(ver_fal, type(ver_fal))

print("Esto es una suma:")
num1 = 2
num2 = 4
result = num1 + num2
print(result)

x = 5
x+= 12
print(x)

x = 5
x-= 12
print(x)

#suma:
print("Incremento o aumento:")
x = 1
print("El valor inicial de x es:", x)
x +=1
x +=1
x +=1
x +=1
print("El valor final de x es:", x)

#resta:
print("Decremento o disminucion:")
x = 8
print("El valor inicial de x es:", x)
x -=1
x -=1
x -=1
x -=1
print("El valor final de x es:", x)

#multiplicacion:
print("Incremento con multiplicacion:")
x = 1
print("El valor inicial de x es:", x)
x *= 2
x *= 2
x *= 2
x *= 2
print("El valor final de x es:", x)

#division:
print("Division:")
x = 8
print("El valor inicial de x es:", x)
x /= 2
x /= 2
print("El valor final de x es:", x)

# division entera: //
print("Division entera:")
x = 5
print("El valor inicial de x es:", x)
x //= 2
print("El valor final de x es:", x)

# potenciacion: **
print("Exponente o potenciacion:")
x = 3
print("El valor inicial de x es:", x)
x **= 3
print("El valor final de x es:", x)

# residuo: % retorna el residuo de la division
print("Residuo:")
x = 9
print("El valor inicial de x es:", x)
x %= 2
print("El valor final de x es:", x)

#repaso:
mensaje = "Hola "
mensaje += "Juan"
numero = 3
numero += 4
print(mensaje, "tu numero es: ", numero)

#Captura desde teclado la informacion: input

nombre = "Hola "
nombre += input("Escribe tu nombre: ")
print(nombre,  ", esto es el incremento y decremento de una variable \n")

print("Este es un incremento:")
x = 2
print("el valor inicial de x es:", x)
x += 1
x += 1
x += 1
x += 1
print("el valor final de x es:", x, "\n")

print("Este es un decremento:")
print("el valor inicial de x es:", x)
x -= 1
x -= 1
x -= 1
print("el valor final de x es:", x)


#operadores y comparacion:
result_s = 10 + 5
result_m = 10 * 5
result_d = 10 / 5
com_igual = 10 == 10
com_menor_que = 5 < 10

print(result_s, result_m, result_d)
print(com_igual, com_menor_que)

#Concatenacion:
print("Concatenacion: ")
mensaje = "Hola"
espacio = " "
nombre = "Jose"

print(mensaje +  espacio + nombre)

num1 = 4
num2 = 6
result = num1 + num2
result = str(result)
print("El resultado de la suma es: " + result)

print("El resultado de la suma es: ", num1, "+", num2, "=", result)

#Metodo buscar:
print("Busqueda:")
mensaje = "Hola jose"
buscar_subcadena = mensaje.find("jose")
print(buscar_subcadena)

#Metodo de extraccion:
print("Extraccion: ")
mensaje = "Hola Maria"
extraer_cadena = mensaje[1:7]
print(extraer_cadena)

#formto de salida
año = 2024
evento = 'Semana Santa'
print(f'Lo mejor de las fiestas de {evento} del {año}')

#salida variable en con texto en comillas
flor = 'rosas'
print(f'El jardin de mi casa esta llena de {flor!r}')

modelo = 'Optimus Tucan'
precio = 1990000
impuestos = precio * 19/100
print(f"Bicicleta {modelo}: {precio + impuestos} pesos")


"Ejercicio 1:"

print("----------Ejercicio1----------------")
#captura nombre de usuario:
nombreUsuario = input("¡Hola! ¿Cuál es tu nombre?\n")

#saludo personalizado
print("Bienvenido, ", nombreUsuario, "!")

#suma
print("Suma")
#Solicitamos al usuario los dos numeros
num1 = float(input("Ingresa el primer número de la suma: "))
num2 = float(input("Ingresa el segundo número de la suma: "))
resultSuma = num1 + num2

print(f"El resultado de la suma es: {resultSuma}\n")
print("El resultado de la suma es:" , resultSuma, "\n")
print("El resultado de la suma es:" + str(resultSuma) + "\n")

#resta
print("Resta")
#Solicitamos al usuario los dos numeros
num1 = float(input("Ingresa el primer número de la resta: "))
num2 = float(input("Ingresa el segundo número de la resta: "))
resultResta = num1 - num2
print(f"El resultado de la resta es: {resultResta}\n")

#multiplicacion
print("Multplicación")
#Solicitamos al usuario los dos numeros
num1 = float(input("Ingresa el primer número de la multiplicación: "))
num2 = float(input("Ingresa el segundo número de la multiplicación: "))
resultMultiplicacion = num1 * num2
print(f"El resultado de la multiplicación es: {resultMultiplicacion}\n")

#Exponente
print("Exponente")
#Solicitamos al usuario los dos numeros
num1 = float(input("Ingresa el  número base de la potenciación: "))
num2 = float(input("Ingresa el número exponente de la potenciación: "))
resultExponente = num1 ** num2
print(f"El resultado de la potenciación es: {resultExponente}\n")

#Potencia cuadrada
print("Potencia cuadrada")
#Solicitamos al usuario el numero
num1 = float(input("Ingresa el  número base de la potencia cuadrada: "))
resultExponenteCuadrada = num1 ** 2
print(f"El resultado de la potencia al cuadrado es: {resultExponenteCuadrada}\n")

#Division:
print("División:")
#Solicitamos al usuario los dos numeros
num1 = float(input("Ingresa el  primer número de la división: "))
num2 = float(input("Ingresa el  segundo número de la división: "))
if num2 != 0:
    resultDivision = num1 / num2
    print(f"El resultado de la división es: {resultDivision}\n")
else:
    print("Error: No se puede dividir por Cero. \n")

#Modulo
print("Modulo")
#Solicitamos al usuario los dos numeros
num1 = float(input("Ingresa el  primer número para calcular el residuo: "))
num2 = float(input("Ingresa el  segundo número para calcular el residuo: "))
resultModulo = num1 % num2
print(f"El resultado de calcular el residuo es: {resultModulo}\n")

#Division entera:
print("División Entera:")
#Solicitamos al usuario los dos numeros
num1 = float(input("Ingresa el  primer número de la división: "))
num2 = float(input("Ingresa el  segundo número de la división: "))
if num2 != 0:
    resultDivisionEntera = num1 // num2
    print(f"El resultado de la división entera es: {resultDivisionEntera}\n")
else:
    print("Error: No se puede dividir por Cero. \n")


print("---------- Estructuras de control ----------------")

# act 1 - If:
if (True):
    print("Se ha ingresado a la estructura de control condicional if")

num1 = 10
if num1 == 5:
    print("El numero es cinco")
print("fin.")

print("Sistema para calcular el promedio de un estudiante")

nombre = input("porfavor ingresar nombre:")
nota1 = int(input(nombre + " Digitar nota 1:" ))
nota2 = int(input(nombre + " Digitar nota 2:" ))
nota3 = int(input(nombre + " Digitar nota 3:" ))
promedio = (nota1 + nota2 + nota3)/3

if promedio >=3:
    print("Felicitaciones " + nombre + ' "APROBASTE" y tu promedio es: ', round(promedio,2))
print("Fin.")

x = 10
if x == 5:
    print("Es 5")
else:
    print("no es 5")
print("fin.")

print("Sistema para calcular el promedio de un estudiante")

nombre = input("porfavor ingresar nombre:")
nota1 = float(input(nombre + " Digitar nota 1:" ))
nota2 = float(input(nombre + " Digitar nota 2:" ))
nota3 = float(input(nombre + " Digitar nota 3:" ))
promedio = (nota1 + nota2 + nota3)/3

if promedio >=3:
    print("Felicitaciones " + nombre + ' "APROBASTE" y tu promedio es: ', round(promedio,2))
else:
    print("Lo sentimos " + nombre + ' "Reprobaste" y tu promedio es: ', round(promedio,2))
print("Fin.")

x = 6
if x == 5:
    print("es 5")
elif x == 6:
    print("es 6")
elif x == 7:
    print("es 7")
else:
    print("el numero no esta registrado")


print("========================")
print("Conversor")
print("========================")

num1 = int(input("¿Cual es el numero que desa convertir?"))
if num1 == 1:
    print("El numero es 'UNO' ")
elif num1 == 2:
    print("El numero es 'DOS' ")
elif num1 == 3:
    print("El numero es 'TRES' ")
elif num1 == 4:
    print("El numero es 'CUATRO' ")
elif num1 == 5:
    print("El numero es 'CINCO' ")
else:
    print("Numero no registrado")
print("Fin.")

print("========================")
print("Menú")
print("========================")

menu = """
Bienvenidos al registro de usuarios, llene los campos que usted prefiera
a continuacion seleccionando del 1 al 3:
[1] Digitar su nombre
[2] Digitar su edad
[3] Digitar correo elctronico
"""
print(menu)
opcion = input('Digite una opcion entre 1 y 3:')
if opcion == '1':
    pass #es un comando de espera para no generar error mientras se crea el bloque del programa.
elif opcion ==  '2':
    pass
elif opcion == '3':
    pass
else:
    print("Digitar un numero entre 1 y 3")

#convertir una cadena a minusculas:
cadena = "Hola Jose"
print(cadena.lower())

#convertir una cadena a mayusculas:
cadena = "Hola Jose"
print(cadena.upper())

#convertir una cadena invirtiendo mayusculas y minusculas:
cadena = "Hola Jose"
print(cadena.swapcase())

#convertir una cadena formato texto:
cadena = "Hola Jose"
print(cadena.title())

print("========================")
print("Conversor")
print("========================")
print("Menu de dos opciones: \n")
menu = """
print("Presiona 1 para convertir de número a palabra.")
print("Presiona 2 para convertir de palabra a número.")
"""
print(menu)
opcion = int(input("¿Cúal de las opciones desea?"))

if opcion == 1:
    print("Conversor de número a palabras\n")
    opcionUno = int(input("Cúal es el numero que desea convertir a palabras"))
    if opcionUno == 1:
        print("El numero es 'UNO' ")
    elif opcionUno == 2:
        print("El numero es 'DOS' ")
    elif opcionUno == 3:
        print("El numero es 'TRES' ")
    elif opcionUno == 4:
        print("El numero es 'CUATRO' ")
    elif opcionUno == 5:
        print("El numero es 'CINCO' ")
    else:
        print("El numero digitado no esta registrado")
elif opcion == 2:
    print("Conversor de palabra a número \n")
    opcionDos = input("Cúal es la palabra que desea convertir a número ")
    opcionDos = opcionDos.upper()

    if opcionDos == 'UNO':
        print("El numero es, ", 1)
    elif opcionDos == 'DOS':
        print("El numero es, ", 2)
    elif opcionDos == 'TRES':
        print("El numero es, ", 3)
    elif opcionDos == 'CUATRO':
        print("El numero es, ", 4)
    elif opcionDos == 'CINCO':
        print("El numero es, ", 5)
    else:
        print("El numero digitado no esta registrado")
else:
    print("\n Opcion no valida")
print("fin")

#tipos de formato de salida:
menu = """
Bienvenidos al registro de usuarios, seleccione la opcion que usted desee:

[1] Digitar su nombre
[2] Digitar su edad
[3] Digitar correo electrónico
"""
print(menu)
opcion = input('Digitar opcion entre 1 y 3:')
if opcion == '1':
    nombre = input('Digitar nombre: ')
    print("Tu nombre es: " + nombre)
    print("Tu nombre es: ", nombre)
    print("Tu nombre es: {}".format(nombre))
elif opcion == '2':
    edad = input('Digitar edad: ')
    print("Tu edad es: {}".format(edad))
elif opcion == '3':
    email = input("Digita el email: ")
    print("Tu email es: {}".format(email))
else:
    print('Debes digitar un numero de 1 a 3')
    print('=-='*20)
print("********* Gracias por su atención*********")


#Validacion de datos:
menu = """
Bienvenidos al registro de usuarios, seleccione la opción que usted desee:

[1] Digitar su nombre
[2] Digitar su edad
[3] Digitar correo electrónico
"""
print(menu)
opcion = input('Digitar opción entre 1 y 3:')
if opcion == '1':
    nombre = input('Digitar nombre: ')
    if nombre.isalpha(): #metodo para evaluar que sea cadena de caracteres.
        print("Tu nombre es: {}".format(nombre))
    else:
        print("El nombre no es valido")
elif opcion == '2':
    edad = input('Digitar edad: ')
    if edad.isnumeric(): #metodo cadena de numeros
        edad = int(edad) # conversion a entero
        if 0 <= edad <= 110:
            print("Tu edad es: {}".format(edad))
        else:
            print('Edad no valida')
    else:
        print('Edad no valida')
elif opcion == '3':
    email = input("Digita el email: ")
    if email.find('@') >= 0 and email.find('.') >= 0:
        print("Tu email es: {}".format(email))
    else:
        print("Email no valido")
else:
    print('Debes digitar un número de 1 a 3')
    print('=-='*20)
print("********* Gracias por su atención *********")

#Lista:
lista = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"]
print(lista)
print(lista[4])

#Listas y tuplas:
nums = [1, 2, 3, 4, 5, 6, 7]
tupla = (10, 20, 30, 40, 50)
print(nums[2])
print(tupla[3])

#modificacion de elementos:
nums[0] = 100
nums.append(6)
print(nums)

miLista = [1, 2, "hola", 3.14]
print(miLista)

a = [1, 3, 5, 7, 9]
print(a)

obj = (7, "hola", True, 3.14)
print(obj)

mi_conjunto = set()
print(mi_conjunto)
mi_conjunto = {1, 2, 3}
print(mi_conjunto)

mi_conjunto = {1,2,"jose", 3.1416}
mi_conjunto.add(3)
mi_conjunto.add("Hola")
mi_conjunto.add('A')
mi_conjunto.add(2)
print(mi_conjunto)
mi_conjunto.discard('A')
print(mi_conjunto)
#mi_conjunto.clear()
#print(mi_conjunto)
print("jose" in mi_conjunto)#buscar elemento en el conjunto

diccionario = {}
print(diccionario)
diccionario = {"azul": "blue", "a": "A"}
print(diccionario["azul"])
diccionario["1"] = 1 #agregar un elemento clave - valor.
print(diccionario)
diccionario["azul"] = "BLUE" #modificar el valor de un elemento.
print(diccionario)
del(diccionario["a"]) #elimina el elemento del diccionario.
print(diccionario)

diccionario = {"Pedro": [22, 1.65], "Ana": [25, 1.70], "Maria": [30, 1.75]}
print(diccionario)

nums = [4,78,9,84]
for n in nums:
    print(n)

for i in range(0,5):
    print(i)
    if i == 2:
        print("Listo")

#decremento:
for i in range(10,-1,-1):
    print(i)
    if i == 2:
        print("¡Fuego!")

#Cortar la palabra.
for letras in 'Python':
    if letras == 'h':
        break
    print("Letra actual:", letras)

#Programa pregunta al usuaro la edad y muestra en pantalla los años cumplidos,
# por ejemplo si digita 5, muestra en pantalla:  haz cumplido 1, haz cumplido 2, hasta has cumplido 5.
edad =  int(input("Digite su edad: "))

for i in range(1, edad + 1):
    print(f'Haz cumplido {i}')

x = 1
while x < 10:
    print(x)
    x += 1

#Decremento while:
x = 9
while x > 0:
    print(x)
    x -= 2

i = 0
while i < 7:
    print("Ensayo")
    i+=1

i = 0
while i < 100:
    print(i)
    i = i +2
    if i > 10:
        break


#Funciones:

#Funcion sin parametros o retorno de valores:
def diHola():
    print("Hola")

diHola()

#Funcion con parametros o retorno de valores:
def holaConNombre(nombre):
    print(f'Hola {nombre}')

holaConNombre("Sandra")

def suma(n1, n2):
    print(n1 + n2)

suma(3, 4)

def resta(a, b = 4):
    return a - b

resultR = resta(5)
print(resultR)

def mul_por_5(num):
    print(f'{num} * 5 = {num * 5}')
print("Inicio de la multiplicacion por 5")
mul_por_5(1)
mul_por_5(2)
mul_por_5(3)
mul_por_5(4)
mul_por_5(5)
mul_por_5(6)
mul_por_5(7)
mul_por_5(8)
mul_por_5(9)
mul_por_5(10)
print("Fin")

def suma (a=4, b=3):
    return a + b

resultS = suma()
print(resultS)

resultS_con_parametros = suma(5,6)
print(resultS_con_parametros)


# Ejercicio - Realizar una funcion de acuerdo a dos numeros me indique cual es el mayor:
def num_mayor(a,b):
    if a > b:
        print(f'{a} es mayor que {b}')
    elif a < b:
        print(f'{b} es mayor que {a}')
    else:
        print(f'{a} y {b} son iguales')

num_mayor(2, 4)

#otra forma de hacer el ejercicio:
def nummayor (n1, n2):
    if n1 > n2:
        max = n1
    else:
        max = n2
    return max

print("Realizar calculo para determinar cual es el numero mayor \n")
n1 = int(input("Digitar numero 1: "))
n2 = int(input("Digitar numero 2: "))

mayor = nummayor(n1,n2)
print(f'El numero mayor es: {mayor}')


#CLASES Y OBJETOS:

class Auto:
    marca = 'Mazda'
    modelo = 2025
taxi = Auto()
print(taxi.modelo)
print(taxi.marca)
'''

#la presentacion indique nombre, apellido, edad y de que ciudad es:
class Persona(object): #Declaramos la clase persona que hereda de object
    def  __init__(self, nombre, apellido, edad, ciudad): #Constructor de la clase
        self.nombre = nombre
        self.apellido = apellido
        self.edad = edad #inicializamos el atributo edad
        self.ciudad = ciudad

    def presentarse(self): # metodo para presentarse
        print(f'Hola, soy {self.nombre} {self.apellido}, tengo {self.edad} años y soy de {self.ciudad}.')


#crear el objeto para la clase persona:
persona1 = Persona("Juan", "Ruiz", 28, "Cali")
persona1.presentarse() #Llamar al metodo para presentar a la persona.



