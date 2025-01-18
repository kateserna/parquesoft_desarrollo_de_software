#Definir las funciones:
def suma (a, b):
    return a + b

def resta (a, b):
    return a - b

def multiplicacion (a, b):
    return a * b

def division (a, b):
    if b != 0:
        return a / b
    else:
        return "Error: División por cero"

#Mostrar menu:

def mostrar_menu():
    print("Calculadora Básica: ")
    print("1. Suma")
    print("2. Resta")
    print("3. Multiplicación")
    print("4. División")
    print("5. Salir")

while True:
    mostrar_menu()
    opcion = input("Elige una opción: ")
    if opcion == "5":
        print("Saliendo del programa")
        break

    num1 = float(input("Ingrese el primer número: "))
    num2 = float(input("Ingrese el segundo número: "))


    if opcion in ["1", "2", "3", "4"]:
        if opcion == "1":
            print(f'Resultado de la suma es: {suma(num1, num2)}')
        elif opcion == "2":
            print(f'Resultado de la resta es: {resta(num1, num2)}')
        if opcion == "3":
            print(f'Resultado de la multiplicación es: {multiplicacion(num1, num2)}')
        if opcion == "4":
            print(f'Resultado de la división es: {division(num1, num2)}')
    else:
        print("Opción no válida, intentar de nuevo. ")

