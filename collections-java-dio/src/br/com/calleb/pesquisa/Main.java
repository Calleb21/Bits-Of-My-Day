package br.com.calleb.pesquisa;

public class Main {
    
    public static void main(String[] args) {
        CatalogoLivros catalogoLivros = new CatalogoLivros();

        catalogoLivros.adicionarLivro("Livro 1", "Autor 1", 2021);
        catalogoLivros.adicionarLivro("Livro 2", "Autor 2", 2001);
        catalogoLivros.adicionarLivro("Livro 3", "Autor 3", 2010);
        catalogoLivros.adicionarLivro("Livro 4", "Autor 4", 2022);
        catalogoLivros.adicionarLivro("Livro 5", "Autor 1", 2023);
        catalogoLivros.adicionarLivro("Livro 6", "Autor 4", 2011);
        catalogoLivros.adicionarLivro("Livro 7", "Autor 3", 2015);
        catalogoLivros.adicionarLivro("Livro 8", "Autor 2", 2017);

        System.out.println();
        System.out.println(catalogoLivros.pesquisarPorAutor("Autor 1"));
        System.out.println();
        System.out.println(catalogoLivros.pesquisarPorIntervaloAnos(2010, 2017));
        System.out.println();
        System.out.println(catalogoLivros.pesquisarPorTitulo("Livro 4"));
    }
}
