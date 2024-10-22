package Colas;
import java.util.Queue;
import java.util.LinkedList;

public class Main {

    /*
    @brief sdfsdfsdfsdfsdfsfdsfsdfsdf
    sdfsdfsdfsdfd
    @param String
    @param int

    @return int
    */
    public static void main(String[] args) {
        //Sintaxis
        //Queue<TipoElemento> nombreCola = new LinkedList<TipoElemento>();
        Queue<String> cola = new LinkedList<String>();
        String arreglo[] = {"Hola","Como","Esta"};

        String elemento;

        //Agregamos elementos a la cola
        for(int indice = 0; indice < arreglo.length; indice++){
            cola.add(arreglo[indice]);
        }

        //Imprimimos y removemos el head de la cola
        while(cola.peek() != null){
            elemento = cola.poll();
            System.out.println(elemento);
        }//Fin del while
 
    }//Fin del Main

}