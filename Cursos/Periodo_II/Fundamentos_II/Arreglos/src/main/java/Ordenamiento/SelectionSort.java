package Ordenamiento;

public class SelectionSort {
    //Ordenamiento por Seleccion

        /*
        @brief Implementation of selection sort algorithm.
        @return int[] - sorted array
        */
        public static void main(String[] args) {
            //Arreglo desordenado
            int arreglo[] = {4,7,1,2,9,2,8};
            //Almacena la posicion del elemento minimo
            int min;
            //variable temporal para el intercambio
            int temp;

            //recorre el arreglo desde 0 hasta n-1
            for(int i = 0; i < arreglo.length - 1 ; i++){
                min = i;

                for(int j = i+1; j < arreglo.length; j++){
                    if(arreglo[j]<arreglo[min]){
                        min = j;
                    }//fin del if
                }//fin del for

                //Intercambiamos el siguiente elemento a ordenar
                temp = arreglo[i];
                arreglo[i] = arreglo[min];
                arreglo[min] = temp;

            }//fin del for

            //Mostramos el arreglo
            for(int posicion = 0; posicion < arreglo.length; posicion++){
                System.out.println(arreglo[posicion]);
            }//fin del for


        }//Fin del main


}
