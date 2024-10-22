package Arreglos;

public class Main {
    public static void main(String[] args) {
        //Sintaxis
        //tipoDato[] nombreVariable = new tipoDato[TAMANIO];

        char saludo[] = new char[4];

        //Asignamos valores en las posiciones del arreglo
        saludo[0] = 'H';
        saludo[1] = 'O';
        saludo[2] = 'L';
        saludo[3] = 'A';

        //Recorremos e imprimimos los elemantos del arreglo
        for(int posicion = 0; posicion < saludo.length; posicion++){
            System.out.print(saludo[posicion]);
        }//fin del for
    }//fin del main

}
