package br.com.calleb;

import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.stream.Stream;

/**
 * @author calle
 */
public class CriandoStreams {

    public static void main(String[] args) {
        Stream<String> stream = List.of("Calleb", "Camargo", "Teste").stream();

        Stream<String> set = Set.of("Calleb", "Camargo", "Teste1").stream();

        Map<String, String> map = Map.of("Calleb", "Camargo");
        Stream<String> chaves = map.keySet().stream();
        Stream<String> valores = map.values().stream();

        Stream<String> streamSTS = Stream.of("String", "Testando");
    }
}
