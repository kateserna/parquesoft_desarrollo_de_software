package Punteros_Nodo;

public class Nodo {
    //Atributos
    private Nodo siguiente;
    private String contiene;

    //Metodos Constructores
    public Nodo(){
        setSiguiente(null);
        setContiene(null);
    }

    public Nodo(String c){
        setSiguiente(null);
        setContiene(c);
    }

    public Nodo(Nodo n, String c){
        setSiguiente(n);
        setContiene(c);
    }

    //Metodos Get y Set
    public Nodo getSiguiente(){
        return this.siguiente;
    }
    public void setSiguiente(Nodo siguiente){
        this.siguiente = siguiente;
    }

    public String getContiene(){
        return this.contiene;
    }
    public void setContiene(String contiene){
        this.contiene = contiene;
    }

}
