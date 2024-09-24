package Taller2;

public class Tigre extends Animal{

    public Tigre () {

    }

    private String sonido;
    private String pelaje;
    private int numPatas;

    public String getSonido() {
        return this.sonido;
    }

    public void setSonido(String sonido) {
        this.sonido = sonido;
    }

    public String getPelaje() {
        return this.pelaje;
    }

    public void setPelaje(String pelaje) {
        this.pelaje = pelaje;
    }

    public int getNumPatas() {
        return this.numPatas;
    }

    public void setNumPatas(int numPatas) {
        this.numPatas = numPatas;
    }
}
