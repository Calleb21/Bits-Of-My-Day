package br.com.calleb;

import java.util.List;
import java.util.stream.Stream;

/**
 * @author calle
 */
public class ExemploLimit {

    public static void main(String[] args) {
        List<Pessoa> list = new Pessoa().popularPessoas();

        Stream<Pessoa> stream = list.stream().limit(2);
    }
}
