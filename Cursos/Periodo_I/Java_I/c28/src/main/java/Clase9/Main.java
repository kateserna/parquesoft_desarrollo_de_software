package Clase9;

import java.text.SimpleDateFormat;
import java.time.*;
import java.util.Calendar;
import java.util.Date;


public class Main {
    public static void main(String[] args) {
        Date date = new Date(); // se instancia con la creacion de un objeto.
        System.out.println("Esto es Date: " +date);

        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM -dd");
        System.out.println("Fecha formateada: " +sdf.format(date)); //Esto me genera un string

        Calendar calendar = Calendar.getInstance();//Esto es un metodo estatico por eso no hay que crear un opbjeto.
        System.out.println("Esto es un Calendar: " +calendar);

        LocalDate localDate = LocalDate.now();
        System.out.println("Esto es un LocalDate: " +localDate);
        LocalDateTime localDateTime = LocalDateTime.now();
        System.out.println("Esto es un LocalDateTime: " +localDateTime);

        /*Forma para restar o sustraer tiempo de mis variables local. Sirve para los rangos de fechas por ejemplo en
        formularios o tiempo maximo para diligenciar un formulario.*/
        System.out.println("Esto es un LocalDateTime menos 1 dia " +localDateTime.minusDays(1));

        LocalTime localTime = LocalTime.now();
        System.out.println("Esto es un LocalTime: " + localTime);

        /*Como se trabaja las fechas dependiendo de mi zona horaria? Siempre se trabaja con la ona del servidor sin
        embargo hay un tipdato que permite que zona horaria voy a manejar, dependiendo de donde tengo alojado el
        servidor deberia colocar la zona*/

        ZoneId zoneBogota = ZoneId.of("America/Bogota");
        ZonedDateTime fechaHoraConZona = (LocalDateTime.now()).atZone(zoneBogota);
        System.out.println("Esto es un ZoneDateTime: " +fechaHoraConZona);

    }
}
