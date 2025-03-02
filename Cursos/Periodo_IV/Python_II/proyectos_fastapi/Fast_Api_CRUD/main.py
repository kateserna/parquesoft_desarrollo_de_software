from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List

# Modelo de datos
class Carro(BaseModel):
    id: str
    marca: str
    modelo: int

# Simulacion de datos para nuestra base de datos:
carros =[
    Carro(id="1", marca="Toyota", modelo=2003),
    Carro(id="2", marca="Ford", modelo=2017),
]

app = FastAPI() #crea objeto FastAPI

#crear decorador para la ruta principal:
@app.get("/")
# funcion que se ejecuta cuando se accede a la ruta principal:
# estructura del index
async def home():
    return """<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
    <h1>Iniciando CRUD</h1>
    <h2>Utiliza los endpoints para interactuar con los datos de los carros.</h2>
    </body>
    </html>
    """

# Decorador para la ruta de listar carros
# Se especifica el modelo de respuesta con response_model
@app.get("/carros", response_model=List[Carro])
async def get_carros():
    return carros

# Decorador para crear un carro
@app.post("/carros", status_code=201)
async def create_carro(carro: Carro):
    carros.append(carro)
    return {"mensaje":"Nuevo carro"}

# Decorador para eliminar un carro
@app.delete("/carros/{id}")
async def delete_carro(id: str):
    global carros

    carros = [carro for carro in carros if carro.id != id]

    #List comprehension: crea una nueva lista con los carros que no tienen el id que se quiere
    # nuevos_carros = []
    # for carro in carros:
    #     if carro.id != id:
    #         nuevos_carros.append(carro)
    # carros = nuevos_carros

    return {"mensaje":f"Carro id {id} ha sido eliminado"}

# Decorador para actualizar un carro
@app.put("/carros/{id}")
async def update_carro(id: str, carro: Carro):
    for i, c in enumerate(carros):
        if c.id == id:
            carros[i] = carro
            return {"mensaje":f"Carro actualizado"}
    raise HTTPException(status_code=404, detail="Carro no encontrado")

