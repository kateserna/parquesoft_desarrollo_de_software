package Taller4;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        //Pedir tres notas, almacenarlas en un arreglo o lista y sacar el promedio.
        Scanner scanner = new Scanner(System.in);
        Float[] notas = new Float[3];

        System.out.println("Calcular el promedio de 3 notas:");
        System.out.println("Digite la primera nota:");
        notas[0] = scanner.nextFloat();
        System.out.println("Digite la segunda nota:");
        notas[1] = scanner.nextFloat();
        System.out.println("Digite la tercera nota:");
        notas[2] = scanner.nextFloat();

        scanner.close();

       float promedio = (notas[0] + notas[1] + notas[2])/ notas.length;

        System.out.println("El promedio de las notas es: " +promedio);
    }
}
