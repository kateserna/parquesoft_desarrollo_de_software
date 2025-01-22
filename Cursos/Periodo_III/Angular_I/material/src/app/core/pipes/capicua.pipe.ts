import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capicua'
})
export class CapicuaPipe implements PipeTransform {

  transform(value: string): string {
    // convierte el string a minusculas y la expresion regular elimina los espacios al principio o al final
    const textoProcesado = value.toLowerCase().replace(/\s/g, '');
    //dividir las palabras, voltear la cadena, para unir de nuevo las palabras.
    const textoInvertido = textoProcesado.split('').reverse().join('');
    //operador ternario para devolver la cadena
    return textoProcesado === textoInvertido ? 'Sí' : 'No';
  }

}
