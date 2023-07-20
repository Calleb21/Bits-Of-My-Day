package br.com.calleb;

import java.util.List;

/**
 * @author calle
 */
public class ExemplosAllMatch {

    public static void main(String[] args) {

        List<Pessoa> lista = new Pessoa().popularPessoas();

        boolean result = lista.stream()
                .allMatch(pessoa -> pessoa.getNacionalidade().equals("Brasil"));
        System.out.println(result);
    }
}
