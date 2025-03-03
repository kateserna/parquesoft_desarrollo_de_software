from fastapi import HTTPException
from pydantic import BaseModel
from typing import List
from fastapi import APIRouter

router = APIRouter()

class Cliente(BaseModel):
    id: str
    nombre: str
    apellido: str
    edad: int

clientes = [
    Cliente(id="1", nombre="Juan", apellido="Perez", edad=30),
    Cliente(id="2", nombre="Maria", apellido="Gomez", edad=25),
]

# Ruta para obtener todos los clientes
@router.get("/clientes", response_model=List[Cliente])
async def get_clientes():
    return clientes

# Ruta para crear un cliente
@router.post("/clientes", status_code=201)
async def create_cliente(cliente: Cliente):
    clientes.append(cliente)
    return {"mensaje": "Nuevo cliente creado"}

# Ruta para eliminar un cliente
@router.delete("/clientes/{id}")
async def delete_cliente(id: str):
    global clientes
    clientes = [cliente for cliente in clientes if cliente.id != id]
    return {"mensaje": f"Cliente id {id} ha sido eliminado"}
    #como pongo la excepcion en caso de que no exista el id

# Ruta para actualizar un cliente
@router.put("/clientes/{id}")
async def update_cliente(id: str, cliente: Cliente):
    #global clientes
    for i, cli in enumerate(clientes):
        if cli.id == id:
            clientes[i] = cliente
            return {"mensaje": f"Cliente id {id} ha sido actualizado"}
    raise HTTPException(status_code=404, detail="Cliente no encontrado")