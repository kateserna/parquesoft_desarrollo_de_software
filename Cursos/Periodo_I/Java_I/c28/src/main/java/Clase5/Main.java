package Clase5;

import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        String[] arregloPalabras = new String[5];

        arregloPalabras[0] = "Mauricio";
        arregloPalabras[2] = "Sara";

        String[] materias ={"matematicas", "programacion", "calculo"};
        System.out.println(materias[0]);
        System.out.println("El tamaño de mi arreglo es: "+arregloPalabras.length);

        List<String> myList = List.of("Perros calientes", "Arepa", "Carne asada");
        List<String> myList2 = new ArrayList<>();

        myList2.add("Mango");
        myList2.add("Pera");

        //uso de stream con un foreach sin necesidad de pasar los parametros.
        myList.stream().forEach(System.out::println);


    }
}
