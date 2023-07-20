package br.com.calleb;

import java.util.List;
import java.util.stream.Stream;

/**
 * @author calle
 */
public class ExemploDistinct {

    public static void main(String[] args) {
        List<Pessoa> lista = new Pessoa().popularPessoas();

        Stream<Pessoa> stream = lista.stream().distinct();
    }
}
