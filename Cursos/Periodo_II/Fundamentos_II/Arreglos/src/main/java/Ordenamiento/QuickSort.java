package Ordenamiento;

public class QuickSort {
    /* Esta función toma el último elemento como pivote, coloca el elemento pivote en su posición en la matriz ordenada, y coloca todos los elementos menores (más pequeños que el pivote) a la izquierda del pivote y todos los elementos mayores a la derecha del pivote  */
    int partition(int arr[], int low, int high)
    {
        int pivot = arr[high];
        int i = (low-1); // indice del elemento mas pequeño
        for (int j=low; j<high; j++)
        {
            // El elemento actual es menor o igual al pivote?
            if (arr[j] <= pivot)
            {
                i++;

                // Intercambia arr[i] y arr[j]
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }

        // Intercambia arr[i+1] y arr[high] (o por el pivote)
        int temp = arr[i+1];
        arr[i+1] = arr[high];
        arr[high] = temp;

        return i+1;
    }


    /* Funcion principal que implementa QuickSort()
      arr[] --> Arreglo a ordenar,
      low  --> Indice de inicio,
      high  --> Indice Final */
    void sort(int arr[], int low, int high)
    {
        if (low < high)//Condicion de parada
        {
            /* pi es el índice de partición, arr[pi] está
              ahora en el lugar correcto */
            int pi = partition(arr, low, high);

            // Ordenar recursivamente los elementos antes de la
            // partición y después de la partición
            sort(arr, low, pi-1);
            sort(arr, pi+1, high);
        }
    }

    /* Funcion utilitaria que imprime un arreglo de tamaño n */
    static void printArray(int arr[])
    {
        int n = arr.length;
        for (int i=0; i<n; ++i)
            System.out.print(arr[i]+" ");
        System.out.println();
    }

    // Main
    public static void main(String args[])
    {
        int arr[] = {10, 7, 8, 9, 1, 5};
        int n = arr.length;

        QuickSort ob = new QuickSort();
        ob.sort(arr, 0, n-1);

        System.out.println("Arreglo Ordenado");
        printArray(arr);
    }
}
