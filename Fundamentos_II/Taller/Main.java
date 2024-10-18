package Taller;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Main {
    public static void main(String[] args) {

        List<String> nombres = new ArrayList<>(Arrays.asList("Alejandro", "Nestor", "Maria", "Roger", "Katerine",
                "Stiven", "David", "Henry", "Felix", "Gabriel", "Claudia", "Carlos", "Liliana", "Adriana", "Socorro",
                "Fabian", "Vanessa", "Laura", "Leonardo", "Viviana", "Oscar", "Juan", "Eliana", "Diana", "Luis"));

        MetodosOrdenar objeto = new MetodosOrdenar();

        System.out.println("Arreglo nombres aleatorios:");
        objeto.agregarAVector(nombres);
        System.out.println();

        objeto.insertionSort();

        System.out.println("Arreglo nombres ordenado:");
        objeto.imprimir();
    }
}
