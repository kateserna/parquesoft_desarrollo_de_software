from flask import Flask, render_template
from config import Config

app = Flask(__name__) #instancia de flask 

app.config.from_object(Config) #creamos la configuracion de la aplicacion

@app.route('/') #decorador o ruta de raiz principal

#funcion que va a renderizar un archivo html(index), esto sera ejecutado con la 
#aplicacion que acceda a la ruta raiz

def Hola_Mundo():
    return render_template('index.html') 

if __name__ == '__main__':
    # hace que el servidor se ejecute automaticamente
    app.run(debug=True)