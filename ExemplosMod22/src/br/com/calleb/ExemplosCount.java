package br.com.calleb;

import java.util.List;

/**
 * @author calle
 */
public class ExemplosCount {

    public static void main(String[] args) {
        List<Pessoa> lista = new Pessoa().popularPessoas();

        long count = lista.stream()
                .filter(pessoa -> pessoa.getNome().startsWith("M"))
                .count();

        System.out.println(count);
    }
}
