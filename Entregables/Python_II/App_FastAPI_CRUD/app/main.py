import os
from fastapi import FastAPI
from fastapi.responses import HTMLResponse
# from fastapi.staticfiles import StaticFiles
from .routers import celulares
from .routers import clientes
from .routers import proveedores

app = FastAPI()

# Ruta principal
# app.mount("/static", StaticFiles(directory=os.path.dirname(__file__)), name="static")
@app.get("/", response_class=HTMLResponse)
async def home():
    with open(os.path.join(os.path.dirname(__file__), "../index.html")) as f:
        return HTMLResponse(content=f.read(), status_code=200)

app.include_router(celulares.router)
app.include_router(clientes.router)
app.include_router(proveedores.router)