package Pilas;

import java.util.Stack;
import java.util.EmptyStackException;

public class Main {
    public static void main(String[] args) {
        //Sintaxis
        //Stack<tipoElemento> nombreVariable = new Stack<tipoElemento>();
        Stack<Integer> pila = new Stack<Integer>();

        //Agregamos elementos a la pila
        pila.push(1);
        pila.push(2);
        pila.push(3);
        pila.push(4);

        //Mostramos los elementos de la pila
        while(!pila.empty()){
            //imprimimos y removemos el elemento del tope
            try{
                System.out.println(pila.pop());

            }catch(EmptyStackException e){
                System.out.println(e);
                break;//Rompemos el ciclo
            }

        }//Fin del while

    }//Fin del main

}
