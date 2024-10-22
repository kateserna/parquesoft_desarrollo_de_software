package Punteros_Nodo;

public class Main {
    public static void main(String[] args) {
        String persona1 = "Juan";
        String persona2 = "Pedro";
        String persona3 = "Maria";
        String persona4 = "Luisa";

        //Declaramos objetos de tipo Nodo
        Nodo n1 = new Nodo(persona1);
        Nodo n2 = new Nodo(persona2);
        Nodo n3 = new Nodo(persona3);
        Nodo n4 = new Nodo(persona4);

        n1.setSiguiente(n2);
        n2.setSiguiente(n3);
        n3.setSiguiente(n4);

        Nodo aux = n1;

        for(int nodo = 0; nodo < 4; nodo++){
            String aux2 = (String)aux.getContiene();
            System.out.println(aux2);
            aux = aux.getSiguiente();
        }
    }
}


