package Matrices;

public class Main {

    public static void main(String[] args) {
        //Sintaxis
        //tipoDato nombreVariable[][] = new tipoDato[FILAS][COL];
        int matriz[][] = new int[3][2];

        matriz[0][0] = 1;
        matriz[0][1] = 2;
        matriz[1][0] = 3;
        matriz[1][1] = 4;
        matriz[2][0] = 5;
        matriz[2][1] = 6;

        for(int fila = 0; fila < matriz.length; fila++){//Recorre las filas
            for(int col = 0; col < matriz[fila].length; col++){//Recorre las columnas
                System.out.print(matriz[fila][col] + " ");
            }//Fin del for
            System.out.println();
        }//Fin del for

    }//Fin del main
}
