package Clase7;

import java.util.List;

public class StreamEjemplo {
    public static void main(String[] args) {
        List<String> myLista = List.of("Mauricio", "Carolina", "James");
        for (String nombre: myLista) {
            System.out.println(nombre.toUpperCase());
        }
        //stream y foreach
        // myLista.stream().forEach(tmp -> System.out.println(tmp.toUpperCase()));
        //sin usar stream
        //myLista.forEach(tmp -> System.out.println(tmp.toUpperCase()));
        //con stream: mapeeme este resultado y para cada uno de estos llame el metodo string junto to upper case
        //(convirtiendo cada resultado a mayuscula), e imprima todos los resultados. Esto es con programacion funcional
        myLista.stream()
                .map(String::toUpperCase)
                .forEach(System.out::println);

        List<Integer> myListaNumerica = List.of(8, 5, 7, 1, 10);
        myListaNumerica.stream() //me dice que voy a trabaj un flujo de datos
                .filter(n->n>=5)
                .sorted() //ordenar los datos
                .limit(3) //primeros dos resultados
                .forEach(System.out::println);

    }

}
