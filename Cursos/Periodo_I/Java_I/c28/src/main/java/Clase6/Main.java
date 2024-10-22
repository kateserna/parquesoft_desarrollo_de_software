package Clase6;

import java.util.ArrayList;
import java.util.List;

public class Main {

    public static void main(String[] args) {

        int contador = 0;

        while (contador <= 5) {
            System.out.println("Valor contador: " + contador);
            contador++; // === //  contador = contador + 1;
        }

        System.out.println("""
                
                Aca termina el while y empieza el do while
                """);
        contador = 0;

        do {
            System.out.println("Valor contador: " + contador);
            contador++; // === //  contador = contador + 1;
        } while (contador <= 5);

        System.out.println("""
                
                Aca termina el do while y empieza el for
                """);

        for (int i = 1; i <= 10; i++) {
            System.out.println("Numeros: " + i);
        }

        System.out.println("""
                
                numeros pares
                """);

        for (int i = 2; i <= 10; i += 2) {
            System.out.println("Numeros: " + i);
        }
        System.out.println("""
                
                numeros impares
                """);

        for (int i = 1; i <= 10; i += 2) {
            System.out.println("Numeros: " + i);
        }

//Recorrer arreglos
        System.out.println("""
                
                arreglo
                """);
        String[] arregloPalabras = new String[2];

        arregloPalabras[0] = "Mauricio";
        arregloPalabras[1] = "Sara";

        List<String> myList = List.of("Perros calientes", "Arepa", "Carne asada");

        for(int i=0; i<arregloPalabras.length; i++){
            System.out.println("Valor arreglo: "+arregloPalabras[i]);
        }
//Recorrer lista
        System.out.println("""
                
                lista
                """);
        for(int i=0; i<myList.size(); i++){
            System.out.println("Valor Lista: "+myList.get(i));
        }

        //for each
        System.out.println("""
                
                foreach
                """);
        for(String comidas: myList) {
            System.out.println(comidas);
        }

        try {
            System.out.println(arregloPalabras[4]);
        } catch (ArrayIndexOutOfBoundsException e){
            System.out.println(e);
        } catch (RuntimeException e) {
            System.out.println(e);
        }
    }
}