class Tarea:
    def __init__(self, titulo, descripcion, estado):
        self.titulo = titulo
        self.descripcion = descripcion
        self.estado = estado

def mostrar_menu():
    print("\nSistema de Gestion de Tarea: ")
    print("1. Agregar una tarea ")
    print("2. Mostrar las tareas")
    print("3. Buscar una tarea por título")
    print("4. Actualizar el estado de una tarea")
    print("5. Actualizar la decripción de una tarea")
    print("6. Eliminar una tarea")
    print("7. Filtrar tareas por estado")
    print("8. Salir")

listaTareas = []

while True:
    mostrar_menu()
    opcion = input("Elige una opción: ")

    if opcion == "8":
        print("Saliendo del programa.")
        break

    if opcion == "1":
        titulo = input("Ingrese el nombre de la tarea: ").title()
        if titulo == "":
            print("Título no valido. Ingrese porfavor un título.")
            continue
        descripcion = input("Ingrese la descripcion de la tarea: ").lower()
        estado = input("Ingrese el estado de la tarea (pendiente o completada): ").title()
        if estado not in ("Pendiente", "Completada"):
            print("El estado no es válido. Ingrese el estado pendiente o completada")
            continue
        tarea = Tarea(titulo, descripcion, estado)
        listaTareas.append(tarea)
        print("Tarea agregada.")
    elif opcion == "2":
        print("Listado de tareas:")
        for t in listaTareas:
            print(f'Título: {t.titulo}, Descripción: {t.descripcion}, Estado: {t.estado}')
    elif opcion == "3":
        titulo = input("Ingrese el título de la tarea a buscar: ").title()
        tareaEncontrada = False
        for t in listaTareas:
            if t.titulo == titulo:
                print(f'Título: {t.titulo}, Descripción: {t.descripcion}, Estado: {t.estado}')
                tareaEncontrada = True
                break
        if not tareaEncontrada:
            print("Tarea no encontrada.")
    elif opcion == "4":
        titulo = input("Ingrese el título de la tarea para actualizar su estado: ").title()
        tareaEncontrada = False
        for t in listaTareas:
            if t.titulo == titulo:
                tareaEncontrada = True
                print(f'Va a actualizar la tarea {titulo}:\n'
                      f'Título: {t.titulo}, Descripción: {t.descripcion}, Estado: {t.estado} ')

                estadoActualizado = input("Ingrese el estado de la tarea (pendiente o completada): ").title()
                if estadoActualizado not in ("Pendiente", "Completada"):
                    print("El estado no es válido. Ingrese el estado pendiente o completada")
                    break
                t.estado = estadoActualizado
                print(f'Tarea actualizada: \n'
                      f'Título: {t.titulo}, Descripción: {t.descripcion}, Estado: {t.estado} ')
                break
        if not tareaEncontrada:
            print(f' La tarea {titulo} no existe.')
    elif opcion == "5":
        titulo = input("Ingrese el título de la tarea para actualizar su descripción: ").title()
        tareaEncontrada = False
        for t in listaTareas:
            if t.titulo == titulo:
                tareaEncontrada = True
                print(f'Va a actualizar la tarea {titulo}:\n'
                      f'Título: {t.titulo}, Descripción: {t.descripcion}, Estado: {t.estado} ')

                descripcionActualizada = input("Ingrese la descripción de la tarea: ").lower()
                t.descripcion = descripcionActualizada
                print(f'Tarea actualizada: \n'
                      f'Título: {t.titulo}, Descripción: {t.descripcion}, Estado: {t.estado} ')
                break
        if not tareaEncontrada:
            print(f' La tarea {titulo} no existe.')
    elif opcion == "6":
        titulo = input("Ingrese el título de la tarea a eliminar: ").title()
        tareaEncontrada = False
        for t in listaTareas:
            if t.titulo == titulo:
                tareaEncontrada = True
                print(f'Va a eliminar la tarea {titulo}:\n'
                      f'Título: {t.titulo}, Descripción: {t.descripcion}, Estado: {t.estado} ')
                listaTareas.remove(t)
                print("Tarea Eliminada")
                break
        if not tareaEncontrada:
            print(f' La tarea {titulo} no existe.')
    elif opcion == "7":
        filtroEstado = input("Ingrese el estado por el que desea filtrar (Completada o Pendiente: ").title()
        for t in listaTareas:
            if t.estado == filtroEstado:
                print(f'Título: {t.titulo}, Descripción: {t.descripcion}, Estado: {t.estado}')

    else:
        print("Opción no válida. Intentar de nuevo.")









