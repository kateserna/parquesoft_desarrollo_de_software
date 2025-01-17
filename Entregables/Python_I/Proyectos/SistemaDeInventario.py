class Producto:
    def __init__(self, nombre, cantidad, precio):
        self.nombre = nombre
        self.cantidad = cantidad
        self.precio = precio

def mostrar_menu():
    print("Sistema de inventario")
    print("1. Agregar producto")
    print("2. Mostrar producto")
    print("3. Buscar producto")
    print("4. Actualizar producto")
    print("5. Eliminar producto")
    print("6. Salir")

inventario = []

while True:
    mostrar_menu()
    opcion = input("Elige una opción: ")

    if opcion == "6":
        print("Saliendo del programa.")
        break

    if opcion == "1":
        nombre = input("Ingrese el nombre del producto: ")
        try:
            cantidad = int(input("Ingresa la cantidad: "))
            precio = float(input("Ingresa el precio: "))
            producto = Producto(nombre, cantidad, precio)
            inventario.append(producto)
        except ValueError:
            print("Error: Entrada no válida.")
    elif opcion == "2":
        pass
