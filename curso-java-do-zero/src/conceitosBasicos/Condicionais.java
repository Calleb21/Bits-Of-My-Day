package conceitosBasicos;

public class Condicionais {

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

        if (b > 101) {
            System.out.println("Verdade");
        } else {
            System.out.println("Falso");
        }

        if (str.isBlank()) {
            System.out.println("Verdadeiro");
        } else if (str == "Calleb") {
            System.out.println("Calleb");
        } else {
            System.out.println("Falso");
        }
    }
}
