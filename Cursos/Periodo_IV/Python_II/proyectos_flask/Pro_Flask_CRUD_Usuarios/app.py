from flask import Flask, render_template, request, jsonify

usuarios = [
    {
    "id": "1",
    "nombre": "Juan",
    "email": "juan@example.com"
    },
    {
    "id": "2",
    "nombre": "Ana",
    "email": "ana@example.com"
    }
]

# Simulacion de datos para nuestra base de datos:
carros =[
    {"id":"1", 
     "marca":"Toyota", 
     "modelo":2003
    },
    {"id":"2", 
      "marca":"Ford", 
      "modelo":2017
    }
]

#Crear la instancia de la aplicacion Flask
app = Flask(__name__)

# Ruta para la pagina principal
@app.route("/")
def home():
    return render_template("index.html")

#---------- Metodos para carros -------------

# Ruta para obtener todos los carros
@app.route("/carros", methods=["GET"])
def get_carros():
    return jsonify(carros), 200

# Ruta para crear un nuevo carro
@app.route("/carros", methods=["POST"])
def post_carro():
    nuevo_carro = request.json()
    # Agregar el nuevo carro a la lista carros
    carros.append(nuevo_carro)
    return "Nuevo carro creado", 201
    # Mensaje personalizado de éxito
    #return jsonify({
    #   "message": "Carro agregado con éxito",
    #   "carro": nuevo_carro
    #}), 201

# Ruta para eliminar un carro
@app.route("/carros/<id>", methods=["DELETE"])
def delete_carro(id):
    global carros
    # Filtrar la lista de carros para eliminar el carro con el id correspondiente
    carros = [carro for carro in carros if carro["id"] != id]
    return f"Carro con id {id} ha sido eliminado", 200
    #return jsonify({"message": f"Carro con id {id} ha sido eliminado"}

# Ruta para actualizar un carro
@app.route("/carros/<id>", methods=["PUT"])
def put_carro(id):
    # Obtener el nuevo carro desde el cuerpo de la solicitud
    nuevo_carro = request.get_json()
    # Filtrar la lista de carros para actualizar el carro con el id correspondiente
    for index, carro in enumerate(carros):
        if carro["id"] == id:
            carros[index] = nuevo_carro
            return f"Carro con id {id} ha sido actualizado", 200
    return "Carro no encontrado", 404
    # Mensaje personalizado de éxito
    #return jsonify({"message": f"Carro con id {id} ha sido actualizado"}), 200

#---------- Metodos para usuarios -------------

# Ruta para obtener todos los usuarios
@app.route("/usuarios", methods=["GET"])
def get_usuarios():
    return jsonify(usuarios), 200

# Ruta para crear un nuevo usuario
@app.route("/usuarios", methods=["POST"])
def post_usuario():
    nuevo_usuario = request.get_json()# Obtener el JSON enviado en el cuerpo de la solicitud   
    nuevo_usuario["id"] = str(nuevo_usuario["id"]) # Asegurarse de que el ID es tratado como cadena
    # Agregar el nuevo usuario a la lista usuarios
    usuarios.append(nuevo_usuario)
    return "Nuevo usuario creado", 201

    # Mensaje personalizado de éxito
    #return jsonify({
    #   "message": "Usuario agregado con éxito",
    #   "usuario": nuevo_usuario
    #}), 201

# Ruta para eliminar un usuario
@app.route("/usuarios/<id>", methods=["DELETE"])
def delete_usuario(id):
    global usuarios
    id = str(id)# Asegurarse de que id recibido desde la URL es tratado como cadena, igual que los IDs en la lista.
    # Filtrar la lista de usuarios para eliminar el usuario con el id correspondiente
    usuarios = [usuario for usuario in usuarios if usuario["id"] != id]
    return f"Usuario con id {id} ha sido eliminado", 200
    #return jsonify({"message": f"Usuario con id {id} ha sido eliminado"}), 200

# Ruta para actualizar un usuario
@app.route("/usuarios/<id>", methods=["PUT"])
def put_usuario(id):
    global usuarios
    id = str(id) # Asegurarse de que id es tratado como cadena
    # Buscar el usuario por id
    user = next((usuario for usuario in usuarios if usuario["id"] == id), None)
    if user is None:
        return jsonify({"message": "Usuario no encontrado"}), 404

    # Actualizar el usuario con los nuevos datos
    data = request.get_json() # Obtener los datos para actualizar
    user.update(data) # Actualizar los datos del usuario
    # Mensaje personalizado de éxito
    return "Usuario actualizado con éxito", 200
    
    #return jsonify({
    #   "message": "Usuario actualizado con éxito",
    #   "usuario": user
    #}), 200

# Ejecutar la aplicacion
if __name__ == "__main__":
    app.run(debug=True)

