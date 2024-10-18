package Taller;

import java.util.List;
import java.util.Vector;

public class MetodosOrdenar {

   Vector<String> vectorNombres = new Vector<>();

    //Se genera numero aleatoio
   public int numAleatorio(int maxNum){
       int aleatorio = 0;
       aleatorio = (int) (Math.random()*(maxNum));
       return aleatorio;
   }

   //Se genera un vector de nombres
   public void agregarAVector(List nombres){
       int num;
       while (!nombres.isEmpty()) {
           num = this.numAleatorio(nombres.size());
           vectorNombres.add((String) nombres.get(num));
           nombres.remove(num);
       }
       System.out.println(vectorNombres);
   }

   //Se ordena el vector en orden alfabético
   public void insertionSort(){
        int pos;
        String valor;

        for ( int i = 0; i < vectorNombres.size(); i++){
            pos = i;
            valor = vectorNombres.get(i);

            while (pos > 0 && valor.compareTo(vectorNombres.get(pos-1)) < 0){
                vectorNombres.set(pos, vectorNombres.get(pos-1));
                pos = pos -1;
            }
            vectorNombres.set(pos, valor);
        }
    }
    //Imprimir el vector
   public void imprimir(){
       System.out.println(vectorNombres);
    }
}






