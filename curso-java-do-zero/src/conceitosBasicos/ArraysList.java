package conceitosBasicos;

import java.util.ArrayList;

public class ArraysList {

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

        ArrayList<String> nome = new ArrayList<>();
        nome.add("Calleb");
        nome.add("Camargo");

        System.out.println(nome.get(1));
        nome.remove("Camargo");
        System.out.println(nome.get(0));
    }
}
