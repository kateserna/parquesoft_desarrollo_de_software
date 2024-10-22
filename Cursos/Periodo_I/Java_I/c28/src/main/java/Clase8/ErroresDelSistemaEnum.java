package Clase8;

public enum ErroresDelSistemaEnum {
    ERROR_404(1, "ESTE ERROR ES MUY GRAVE");

    private  final int id;
    private final String nombre;

    ErroresDelSistemaEnum(int id, String nombre) {
        this.id = id;
        this.nombre = nombre;
    }


    //como consulto la informacion.

   public String getNombre() {
        return nombre;
   }

   //Metodo que me entregue por la clave
    public static ErroresDelSistemaEnum getForKey(int id) {
        for (ErroresDelSistemaEnum e : ErroresDelSistemaEnum.values()) {
            if (e.id == id) {
                return e;
            }
        }
        throw new RuntimeException("No encontro nada");
    }

}
