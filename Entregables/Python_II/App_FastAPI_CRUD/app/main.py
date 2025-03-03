import os
from fastapi import FastAPI
from fastapi.responses import HTMLResponse
# from fastapi.staticfiles import StaticFiles
from .routers import celulares

app = FastAPI()

app.include_router(celulares.router)

# Ruta principal
# app.mount("/static", StaticFiles(directory=os.path.dirname(__file__)), name="static")
@app.get("/", response_class=HTMLResponse)
async def home():
    with open(os.path.join(os.path.dirname(__file__), "../index.html")) as f:
        return HTMLResponse(content=f.read(), status_code=200)

