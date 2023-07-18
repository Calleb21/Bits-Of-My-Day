package br.com.calleb;

import java.util.List;

/**
 * @author calle
 */
public class Pessoa {

    private String id;
    private String nome;
    private String nacionalidade;
    private int idade;

    public Pessoa() {

    }

    public Pessoa(String id, String nome, String nacionalidade, int idade) {
        this.id = id;
        this.nome = nome;
        this.nacionalidade = nacionalidade;
        this.idade = idade;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getNacionalidade() {
        return nacionalidade;
    }

    public void setNacionalidade(String nacionalidade) {
        this.nacionalidade = nacionalidade;
    }

    public int getIdade() {
        return idade;
    }

    public void setIdade(int idade) {
        this.idade = idade;
    }

    public List popularPessoas() {
        Pessoa pessoa1 = new Pessoa("p1", "Matheus Cunha", "Brasil", 24);
        Pessoa pessoa2 = new Pessoa("p2", "Lionel Messi", "Argentina", 36);
        Pessoa pessoa3 = new Pessoa("p3", "Cristiano Ronaldo", "Portugual", 39);
        Pessoa pessoa4 = new Pessoa("p4", "Neymar Júnior", "Brasil", 33);
        return List.of(pessoa1, pessoa2, pessoa3, pessoa4);
    }
}
