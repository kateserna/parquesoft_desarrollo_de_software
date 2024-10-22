package Clase8;

public class Main {
    public static void main(String[] args) {

        PersonaServiceI p = new PersonaService();
        p.actualizarPersonasV1();

        PersonaServiceI m = new Motoristas();//Polimorfismo
        m.actualizarPersonasV1();
        System.out.println(DiasDeLaSemana.MIERCOLES);

        ErroresDelSistemaEnum e = ErroresDelSistemaEnum.getForKey(1);//Consulta del id 1
        System.out.println(e.getNombre());//saca el nombre e imprime su valor o puedo imprimir solo el nombre con la
        // variable e

    }
}
