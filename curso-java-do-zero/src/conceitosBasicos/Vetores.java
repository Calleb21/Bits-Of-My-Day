package conceitosBasicos;

public class Vetores {

    public static void main(String[] args) {

        byte b = 100;
        short s = 10000;
        int i = 1000000;
        long l = 1000000L;
        float f = 10.5f;
        double d = 20.5;
        char c = 'A';
        String str = "Calleb";
        boolean bool = true;

        int[] colecaoInteiros = {1, 2, 3, 4, 5, 6};
        System.out.println(colecaoInteiros[5]);
        System.out.println(colecaoInteiros.length);

        int[] meusNumeros = new int[6];
        System.out.println(meusNumeros[5]);
        System.out.println(meusNumeros.length);

    }
}
