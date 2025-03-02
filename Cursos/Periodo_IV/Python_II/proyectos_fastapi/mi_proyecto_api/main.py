from fastapi import FastAPI
from typing import Optional
#import uvicorn

app = FastAPI() #crea objeto FastAPI

#crear decorador para etiquetar a una funcion:
@app.get("/")

# El retorno sera tipo diccionario teniendo en cuenta que es una api y responde en json
def Pract_Python():
    return {"Mi_Primer":"API"}

# if __name__ == "__main__":
#     uvicorn.run(app, host="127.0.0.1", port=8000)

@app.get("/usuario/{usuario_id}")

#q es una variable opcional
def get_usuario(usuario_id: int, q: Optional[str] = None):
    return {"usuario_id": usuario_id, "q": q}
