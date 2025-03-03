from fastapi import HTTPException
from pydantic import BaseModel
from typing import List
from fastapi import APIRouter

router = APIRouter()

class Celular(BaseModel):
    id: str
    marca: str
    modelo: str
    precio: float

celulares = [
    Celular(id="1", marca="Samsung", modelo="Galaxy S21", precio=850000),
    Celular(id="2", marca="Apple", modelo="iPhone 12", precio=1400000),
]

# Ruta para obtener todos los celulares
@router.get("/celulares", response_model=List[Celular])
async def get_celulares():
    return celulares

# Ruta para crear un celular
@router.post("/celulares", status_code=201)
async def create_celular(celular: Celular):
    celulares.append(celular)
    return {"mensaje": "Nuevo celular creado"}

# Ruta para eliminar un celular
@router.delete("/celulares/{id}")
async def delete_celular(id: str):
    global celulares
    celulares = [celular for celular in celulares if celular.id != id]
    return {"mensaje": f"Celular id {id} ha sido eliminado"}
    #como pongo la excepcion en caso de que no exista el id

# Ruta para actualizar un celular
@router.put("/celulares/{id}")
async def update_celular(id: str, celular: Celular):
    #global celulares
    for i, cel in enumerate(celulares):
        if cel.id == id:
            celulares[i] = celular
            return {"mensaje": f"Celular id {id} ha sido actualizado"}
    raise HTTPException(status_code=404, detail="Celular no encontrado")
    

