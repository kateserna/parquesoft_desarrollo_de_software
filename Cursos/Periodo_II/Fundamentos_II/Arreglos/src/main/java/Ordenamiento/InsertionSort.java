package Ordenamiento;

public class InsertionSort {

    public static void main(String[] args) {
        //Arreglo a ordenar
        int arreglo[] = {3,5,1,9,0,2,5};
        //Posicion donde se inserta el elemento a ordenar
        int pos;
        // Valor del elemento a ordenar
        int valor;

        for(int i = 0; i < arreglo.length; i++){
            pos = i;
            valor = arreglo[i];

            while(pos > 0 && valor < arreglo[pos-1]){
                arreglo[pos] = arreglo[pos-1];
                pos = pos -1;
            }//Fin del while
            //Insertamos el valor en la posicion indicada
            arreglo[pos] = valor;
        }//Fin del for

        //mostramos el arreglo
        for(int posicion =0; posicion < arreglo.length; posicion++){
            System.out.println(arreglo[posicion]);
        }//fin del for

    }//Fin del main

}
