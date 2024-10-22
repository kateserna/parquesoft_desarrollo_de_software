package Ordenamiento;

public class MergeSort {
    // Fusiona dos submatrices de arreglo[].
    // Primera submatriz es arreglo[posIzquierda..mitad]
    // Segunda submatriz es arreglo[mitad+1..posDerecha]
    void merge(int arreglo[], int posIzquierda, int mitad, int posDerecha)
    {
        // Determinar el tamaño de las dos submatrices que se van a fusionar
        int tamanioA = mitad - posIzquierda + 1;
        int tamanioB = posDerecha - mitad;

        // Creamos matrices temporales
        int IZQUIERDA[] = new int[tamanioA];
        int DERECHA[] = new int[tamanioB];

        // Copiar datos en matrices temporales
        for (int i = 0; i < tamanioA; ++i){
            IZQUIERDA[i] = arreglo[posIzquierda + i];
        }
        for (int j = 0; j < tamanioB; ++j){
            DERECHA[j] = arreglo[mitad + 1 + j];
        }

        // Fusionar las matrices temporales
        // Índices iniciales de la primera y segunda submatrices
        int i = 0, j = 0;

        // Índice inicial de la matriz de submatrices fusionadas
        int k = posIzquierda;
        while (i < tamanioA && j < tamanioB) {
            if (IZQUIERDA[i] <= DERECHA[j]) {
                arreglo[k] = IZQUIERDA[i];
                i++;
            }
            else {
                arreglo[k] = DERECHA[j];
                j++;
            }
            k++;
        }

        // Copia los elementos restantes de L[] si los hay
        while (i < tamanioA) {
            arreglo[k] = IZQUIERDA[i];
            i++;
            k++;
        }

        // Copia los elementos restantes de R[] si los hay
        while (j < tamanioB) {
            arreglo[k] = DERECHA[j];
            j++;
            k++;
        }
    }

    // Función principal que ordena arreglo[l..r] usando
    // merge()
    void sort(int arreglo[], int posIzquierda, int posDerecha)
    {
        //Condición de parada
        if (posIzquierda < posDerecha) {
            // Encontrar el punto medio
            int mitad = (posIzquierda + posDerecha) / 2;

            // Ordenar la primera y la segunda mitad
            sort(arreglo, posIzquierda, mitad);
            sort(arreglo, mitad + 1, posDerecha);

            // Fusionar las mitades ordenadas
            merge(arreglo, posIzquierda, mitad, posDerecha);
        }
    }

    // Una función de utilidad para imprimir matrices de tamaño n
    static void printArray(int arreglo[])
    {
        int n = arreglo.length;
        for (int i = 0; i < n; ++i){
            System.out.print(arreglo[i] + " ");
        }
        System.out.println();
    }

    //Funcion main()
    public static void main(String[] args) {
        int arreglo[] = { 12, 11, 13, 5, 6, 7 };

        System.out.println("Arreglo original");
        printArray(arreglo);

        // Calling of Merge Sort
        MergeSort ob = new MergeSort();
        ob.sort(arreglo, 0, arreglo.length - 1);

        System.out.println("\nArreglo ordenado");
        printArray(arreglo);
    }

}

