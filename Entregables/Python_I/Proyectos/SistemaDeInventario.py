class Producto:
    def __init__(self, nombre, cantidad, precio):
        self.nombre = nombre
        self.cantidad = cantidad
        self.precio = precio

def mostrar_menu():
    print("Sistema de inventario:")
    print("1. Agregar un producto")
    print("2. Mostrar un producto")
    print("3. Buscar un producto")
    print("4. Actualizar cantidad de un producto")
    print("5. Eliminar un producto")
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
            print("Producto agregado.")
        except ValueError:
            print("Error: Entrada no válida.")
    elif opcion == "2":
        for p in inventario:
            print(f'Nombre: {p.nombre}, Cantidad: {p.cantidad}, Precio: {p.precio}')
    elif opcion == "3":
        nombre = input("Ingrese el nombre a buscar: ")
        productoEncontrado = False
        for p in  inventario:
            if p.nombre == nombre:
                print(f'Nombre: {p.nombre}, Cantidad: {p.cantidad}, Precio: {p.precio}')
                productoEncontrado = True
                break
        if not productoEncontrado:
            print("Producto no encontrado.")
    elif opcion == "4":
        nombre = input("Ingrese el nombre del producto a actualizar: ")
        productoEncontrado = False
        for p in inventario:
            if p.nombre == nombre:
                print(f' El producto {nombre} a actualizar fue enconetrado: \n'
                      f'Nombre: {p.nombre}, Cantidad: {p.cantidad}, Precio: {p.precio}')
                try:
                    cantidadActualizada = int(input("Ingrese la nueva catidad: "))
                    p.cantidad = cantidadActualizada
                    print(f'Producto actualizado: \n'
                          f'Nombre: {p.nombre}, Cantidad: {p.cantidad}, Precio: {p.precio}\n')
                    productoEncontrado =  True
                    break
                except ValueError:
                    print("Error: Entrada no válida")
        if not productoEncontrado:
            print("Producto no existe.")
    elif opcion == "5":
        nombre = input("Ingrese el producto a eliminar: ")
        for p in inventario:
            if p.nombre == nombre:
                inventario.remove(p)
                print("Producto Eliminado.")
                break
            else:
                print("Producto no existe.")
                break
    else:
        print("Opción no válida. Intentar de nuevo.")
