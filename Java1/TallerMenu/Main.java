package TallerMenu;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        String item = "";
        int valor = 0;

        Scanner scanner = new Scanner(System.in);
        int num1 = 0;
        List<String> pedidoItem = new ArrayList<>();
        List<Integer> valoresItems = new ArrayList<>();

        System.out.println("Bienvenido al restaurante.");

        do {
            System.out.println("""
                A continuación el Menú
                Escoja un número para agregar el plato al carrito:
                1. Pizza                 valor $20.000
                2. Hamburguesa           valor $18.000
                3. Papas a la francesa   valor $8.000
                4. Gaseosa               valor $ 5.000
                5. Helado                valor $ 8.000
                6. Para salir del menú
                
                """);
            num1 = scanner.nextInt();

            switch (num1) {
                case 1:
                    item = "Pizza";
                    valor = 20000;
                    break;
                case 2:
                    item = "Hamburguesa";
                    valor = 18000;
                    break;
                case 3:
                    item = "Papas a la francesa";
                    valor = 8000;
                    break;
                case 4:
                    item = "Gaseosa";
                    valor = 5000;
                    break;
                case 5:
                    item = "Helado";
                    valor = 8000;
                    break;
                case 6:
                    System.out.println("Ha salido del menú");
                    continue;
                default:
                    System.out.println("Por favor escoja un número válido");
                    break;
            }
            pedidoItem.add(item);
            valoresItems.add(valor);

        } while (num1 != 6);

        scanner.close();

        //imprimir pedido
        System.out.println("Su pedido es: ");
        for (int i = 0 ; i<pedidoItem.size(); i++){
            System.out.println(pedidoItem.get(i));
        }

        //recorrer valores y sumar
        int subtotal = 0;
        for (int i = 0 ; i<valoresItems.size(); i++){
            subtotal = subtotal + valoresItems.get(i);
        }
        System.out.println("El subtotal de su pedido es: $"+ subtotal +"COP");


        int impuesto = (subtotal * 10) /100;
        System.out.println("El iva es: $" +impuesto +"COP");

        int total = subtotal + impuesto;
        System.out.println("El total a pagar es: $" +total +"COP");
    }
}
