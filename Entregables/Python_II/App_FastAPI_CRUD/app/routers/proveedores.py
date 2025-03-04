from fastapi import Form, HTTPException
from pydantic import BaseModel
from typing import Annotated, List
from fastapi import APIRouter

router = APIRouter()

class Proveedor(BaseModel):
    id: str
    nombre: str
    direccion: str
    telefono: str

proveedores = [
    Proveedor(id="1", nombre="Samsung", direccion="Av. Siempre Viva 123", telefono="123456789"),
    Proveedor(id="2", nombre="Apple", direccion="Calle Falsa 123", telefono="987654321"),
]

# Ruta para obtener todos los proveedores
@router.get("/proveedores", response_model=List[Proveedor])
async def get_proveedores():
    return proveedores

# Ruta para crear un proveedor
@router.post("/proveedores", status_code=201)
async def create_proveedor(proveedor: Annotated[Proveedor, Form()]):
    proveedores.append(proveedor)
    return {"mensaje": "Nuevo proveedor creado"}

# Ruta para eliminar un proveedor
@router.delete("/proveedores/{id}")
async def delete_proveedor(id: str):
    global proveedores
    proveedores = [proveedor for proveedor in proveedores if proveedor.id != id]
    return {"mensaje": f"Proveedor id {id} ha sido eliminado"}
    #como pongo la excepcion en caso de que no exista el id

# Ruta para actualizar un proveedor
@router.put("/proveedores/{id}")
async def update_proveedor(id: str, proveedor: Proveedor):
    #global proveedores
    for i, prov in enumerate(proveedores):
        if prov.id == id:
            proveedores[i] = proveedor
            return {"mensaje": f"Proveedor id {id} ha sido actualizado"}
    raise HTTPException(status_code=404, detail="Proveedor no encontrado")
