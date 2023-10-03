package br.com.calleb.dao.dao;

import br.com.calleb.dao.IProdutoDAO;
import br.com.calleb.domain.Produto;
import br.com.calleb.exceptions.TipoChaveNaoEncontradaException;

import java.util.Collection;

/**
 * Description of ProdutoDaoMock
 * Created by calle on 25/09/2023.
 */
public class ProdutoDaoMock implements IProdutoDAO {

    @Override
    public Boolean cadastrar(Produto entity) throws TipoChaveNaoEncontradaException {
        // TODO Auto-generated method stub
        return true;
    }

    @Override
    public void excluir(String valor) {
        // TODO Auto-generated method stub

    }

    @Override
    public void alterar(Produto entity) throws TipoChaveNaoEncontradaException {
        // TODO Auto-generated method stub

    }

    @Override
    public Produto consultar(String valor) {
        Produto produto = new Produto();
        produto.setCodigo(valor);
        return produto;
    }

    @Override
    public Collection<Produto> buscarTodos() {
        // TODO Auto-generated method stub
        return null;
    }
}
