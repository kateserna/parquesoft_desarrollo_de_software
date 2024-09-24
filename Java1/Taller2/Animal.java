package Taller2;

public class Animal {

    private String alimentacion;
    private String habitat;
    private int tamanio;
    private double peso;


    public String getAlimentacion() {
        return this.alimentacion;
    }

    public void setAlimentacion( String alimentacion) {
        this.alimentacion = alimentacion;
    }

    public int getTamanio() {
        return this.tamanio;
    }

    public void setTamanio(int tamanio) {
        this.tamanio = tamanio;
    }

    public String getHabitat() {
        return this.habitat;
    }

    public void setHabitat(String habitat) {
        this.habitat = habitat;
    }

    public double getPeso() {
        return this.peso;
    }

    public void setPeso(double peso) {
        this.peso = peso;
    }
}
