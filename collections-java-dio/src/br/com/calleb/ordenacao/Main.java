package br.com.calleb.ordenacao;

public class Main {
    
    public static void main(String[] args) {
        
    OrdenacaoPessoa ordenacaoPessoa = new OrdenacaoPessoa();

    ordenacaoPessoa.adicionarPessoa("Nome 1", 24, 1.23);
    ordenacaoPessoa.adicionarPessoa("Nome 2", 18, 1.81);
    ordenacaoPessoa.adicionarPessoa("Nome 3", 34, 1.43);
    ordenacaoPessoa.adicionarPessoa("Nome 4", 56, 1.78);

    System.out.println();
    System.out.println(ordenacaoPessoa.ordenarPorIdade());
    System.out.println();
    }
}
