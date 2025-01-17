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
    print("4. Division")
    print("5. Salir")

while True:
    mostrar_menu()
    opcion = input("Elige una opción: ")
    num1 = float(input("Ingrese el primer número: "))
    num2 = float(input("Ingrese el segundo número: "))

    if opcion == "5":
        print("Saliendo del programa")
        break
    if opcion in ["1", "2", "3", "4", "5"]:
        if opcion == "1":
            print(f'Resultado: {suma(num1, num2)}')
        if opcion == "1":
            print(f'Resultado: {suma(num1, num2)}')
        if opcion == "1":
            print(f'Resultado: {suma(num1, num2)}')
        if opcion == "1":
            print(f'Resultado: {suma(num1, num2)}')
    else:
        print()

