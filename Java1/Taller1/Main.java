package Taller1;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        System.out.println("Cálculo del promedio de tres números:");
        System.out.println("Digite el primer número:");
        float num1 = scanner.nextFloat();

        System.out.println("Digite el segundo número:");
        float num2 = scanner.nextFloat();

        System.out.println("Digite el tercer número:");
        float num3 = scanner.nextFloat();

        float promedio = (num1 + num2 + num3)/3;
        System.out.println("El promedio es: "+promedio);

        scanner.close();
    }
}
