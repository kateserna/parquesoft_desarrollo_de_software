package Clase7;

import java.util.logging.Level;
import java.util.logging.Logger;

public class EjemploLog {

    //Crear un logger para la clase actual
    private static final Logger logger = Logger.getLogger(EjemploLog.class.getName());

    public static void main(String[] args) {
        System.out.println("ESTO ES UN SOUT");

        //Niveles de log
        logger.info("Este es un mensaje informativo");
        logger.warning("Este es un mensaje de advertencia");
        logger.severe("Este es un mensaje de error grave");

        //Usando un bloque try-catch con logs
        try {
            int resultado = dividir(10,0); //Esto causara una excepcion
        } catch (ArithmeticException e) {
            //Loggear la excepcion
            logger.log(Level.SEVERE, "Error al dividir por cero: {0}", e.toString());
        }
    }
    //Metodo para dividir dos numeros
    private static int dividir(int a, int b) {
        return a / b; //Esto lanzara un ArithmeticException si b es 0
    }
}
