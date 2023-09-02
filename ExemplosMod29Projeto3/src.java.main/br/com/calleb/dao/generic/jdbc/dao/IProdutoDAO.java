package br.com.calleb.dao.generic.jdbc.dao;

import br.com.calleb.domain.Produto;

import java.util.List;

/**
 * Description of IProdutoDAO
 * Created by calle on 01/09/2023.
 */
public interface IProdutoDAO {
    Integer cadastrar(Produto produto) throws Exception;

    Produto consultar(String codigo) throws Exception;

    List<Produto> buscarTodosProdutos() throws Exception;
}
