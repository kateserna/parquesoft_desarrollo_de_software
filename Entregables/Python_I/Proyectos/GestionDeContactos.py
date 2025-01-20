class Contacto:
    def __init__(self, nombre, telefono):
        self.nombre = nombre
        self.telefono = telefono

def mostrar_menu():
    print("\nGestion de Contactos")
    print("1. Agregar un Contacto")
    print("2. Mostrar Contactos")
    print("3. Buscar un Contacto")
    print("4. Eliminar un Contacto")
    print("5. Salir")

contactos = []

while True:
    mostrar_menu()
    opcion = input("Elige una opción: ")

    if opcion == "5":
        print("Saliendo del programa.")
        break

    if opcion == "1":
        while True:
            nombre = input("Ingrese el nombre: ")
            try:
                telefono = int(input("Ingrese el número telefónico: "))
                if nombre == "" or telefono == "":
                    print("Error: Entrada no válida.")
                    continue
                else:
                    contacto = Contacto(nombre, telefono)
                    contactos.append(contacto)
                    print("Contacto agregado.")
                    break
            except ValueError:
                print("Error: Entrada no válida. Digite un número.")
                continue
    elif opcion == "2":
        if len(contactos) == 0:
            print("No hay contactos en la lista")
            continue
        for c in contactos:
            print(f'Nombre: {c.nombre}, Telefono: {c.telefono}')
    elif opcion == "3":
        nombre = input(" Ingrese el nombre a buscar: ")
        encontrado = False
        for c in contactos:
            if c.nombre == nombre:
                print("Contacto encontrado:")
                print(f'Nombre: {c.nombre}, Telefono: {c.telefono}')
                encontrado = True
                break
        if not encontrado:
            print("Contacto no encontrado.")
    elif opcion == "4":
        nombre = input("Ingrese el nombre del contacto a eliminar: ")
        for c in contactos:
            if c.nombre == nombre:
                contactos.remove(c)
                print("Contacto Eliminado. ")
                break
            else:
                print("Contacto no existe.")
                break
    else:
        print("Opción no válida. Intentar de nuevo.")



