package Clase2;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        /*
        //Crear un objeto Scanner para leer desde la consola
        Scanner scanner = new Scanner(System.in);

        //Leer una cadena de texto
        System.out.println("Digite su nombre");
        String nombre = scanner.next();
        System.out.println("Nombre: "+nombre);

        //Leer un número entero
        System.out.println("Digite su edad");
        int edad = scanner.nextInt();
        System.out.println("Edad: "+edad);

        //Cerrar el Scanner
        scanner.close();
        */

        Persona persona = new Persona();
        persona.setEdad(31);
        persona.setGenero("No Binario");
        persona.setNombreCompleto("Camilo");

        System.out.println("La edad de la persona es: " +persona.getEdad());
        System.out.println("El nombre completo es: " +persona.getNombreCompleto());
        System.out.println("Su genero es: " +persona.getGenero());

        System.out.println(LocalDateTime.now());
        Persona.correr();


    }
}
