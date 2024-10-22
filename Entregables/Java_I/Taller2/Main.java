package Taller2;

public class Main {

    public static void main(String[] args) {
        Tigre tigre = new Tigre();
        tigre.setAlimentacion("Carnivoro");
        tigre.setHabitat("Terrestre");
        tigre.setTamanio(310);
        tigre.setPeso(230);
        tigre.setSonido("Rugido");
        tigre.setPelaje("Color naranja con rayas negras");
        tigre.setNumPatas(4);

        System.out.println("El tigre es: " +tigre.getAlimentacion());
        System.out.println("Su habitat es: " +tigre.getHabitat());
        System.out.println("Mide: " +tigre.getTamanio() +" cm.");
        System.out.println("Pesa: " +tigre.getPeso() +" kg.");
        System.out.println("El sonido del tigre es: " +tigre.getSonido());
        System.out.println("El pelaje del tigre es: " +tigre.getPelaje());
        System.out.println("El tigre tiene: " +tigre.getNumPatas() +" patas");

    }
}
