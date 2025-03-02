from flask import Flask #importa el framework flask

app = Flask(__name__) #crear instancia para Flask con la variable app

@app.route('/') #genera la ruta para el servidor en la raiz (decorador)

#funcion
def Hola_Mundo():
    return 'Hola Mundo'

"""definir una variable que tiene valor main para saber cuando es verdadero dentro del 
proceso de llamada de la aplicacion raiz"""

if __name__ == '__main__':
    #indica al servidor cuando va a iniciar Flask como va  a llamarlo para que sea verdadero el llamado
    app.run(debug=True)#esto ejecuta el proceso y lo depura para cargar.