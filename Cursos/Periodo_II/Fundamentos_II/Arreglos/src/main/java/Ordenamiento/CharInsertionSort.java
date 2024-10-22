package Ordenamiento;

public class CharInsertionSort {
    public static void main(String[] args) {
        //Arreglo a ordenar
        char arreglo[] = {'z', 'b', 'a', 'm', 'l','f','i'};
        //Posicion donde se inserta el elemento a ordenar
        int pos;
        // Valor del elemento a ordenar
        char valor;

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
