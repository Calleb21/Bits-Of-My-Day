//package br.com.calleb.dao.generic;
//
//import java.util.HashMap;
//import java.util.Map;
//
///**
// * Description of SingletonMap
// * Created by calle on 25/09/2023.
// */
//public class SingletonMap {
//    private static SingletonMap singletonMap;
//
//    /**
//     * qualquer coisa é só tirar o <?> de Class
//     * <p>
//     * Contém todos os registros da aplicação.
//     * Simula o banco de dados
//     */
//    protected Map<Class<?>, Map<?, ?>> map;
//
//    private SingletonMap() {
//        map = new HashMap<>();
//    }
//
//    /**
//     * Método que garante o retorno de apenas uma instância desse objeto
//     *
//     * @return SingletonMap
//     */
//    public static SingletonMap getInstance() {
//        if (singletonMap == null) {
//            singletonMap = new SingletonMap();
//        }
//        return singletonMap;
//    }
//
//    public Map<Class<?>, Map<?, ?>> getMap() {
//        return this.map;
//    }
//}
