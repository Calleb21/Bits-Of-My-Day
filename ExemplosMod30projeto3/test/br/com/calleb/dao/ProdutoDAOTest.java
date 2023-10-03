package br.com.calleb.dao;

import br.com.calleb.domain.Produto;
import br.com.calleb.exceptions.DAOException;
import br.com.calleb.exceptions.MaisDeUmRegistroException;
import br.com.calleb.exceptions.TableException;
import br.com.calleb.exceptions.TipoChaveNaoEncontradaException;
import org.junit.After;
import org.junit.Assert;
import org.junit.Test;

import java.math.BigDecimal;
import java.util.Collection;

import static org.junit.Assert.*;

/**
 * Description of ProdutoDAOTest
 * Created by calle on 25/09/2023.
 */
public class ProdutoDAOTest {

    private IProdutoDAO produtoDAO;

    public ProdutoDAOTest() {
        produtoDAO = new ProdutoDAO();
    }

    @After
    public void end() throws DAOException {
        Collection<Produto> list = produtoDAO.buscarTodos();
        list.forEach(prod -> {
            try {
                produtoDAO.excluir(prod.getCodigo());
            } catch (DAOException e) {
                e.printStackTrace();
            }
        });
    }

    private Produto criarProduto(String codigo) throws TipoChaveNaoEncontradaException, DAOException {
        Produto produto = new Produto();
        produto.setCodigo(codigo);
        produto.setDescricao("Produto 1");
        produto.setNome("Produto 1");
        produto.setValor(BigDecimal.TEN);
        produtoDAO.cadastrar(produto);
        return produto;
    }

    private void excluir(String valor) throws DAOException {
        this.produtoDAO.excluir(valor);
    }

    @Test
    public void pesquisar() throws MaisDeUmRegistroException, TableException, DAOException, TipoChaveNaoEncontradaException {
        Produto produto = criarProduto("P1");
        Assert.assertNotNull(produto);
        Produto produtoDB = this.produtoDAO.consultar(produto.getCodigo());
        Assert.assertNotNull(produtoDB);
        excluir(produtoDB.getCodigo());
    }

    @Test
    public void salvar() throws TipoChaveNaoEncontradaException, DAOException {
        Produto produto = criarProduto("P2");
        Assert.assertNotNull(produto);
        excluir(produto.getCodigo());
    }

    @Test
    public void excluir() throws DAOException, TipoChaveNaoEncontradaException, MaisDeUmRegistroException, TableException {
        Produto produto = criarProduto("P3");
        Assert.assertNotNull(produto);
        excluir(produto.getCodigo());
        Produto produtoDB = this.produtoDAO.consultar(produto.getCodigo());
        assertNull(produtoDB);
    }

    @Test
    public void alterarCliente() throws TipoChaveNaoEncontradaException, DAOException, MaisDeUmRegistroException, TableException {
        Produto produto = criarProduto("P4");
        produto.setNome("Calleb Camargo");
        produtoDAO.alterar(produto);
        Produto produtoDB = this.produtoDAO.consultar(produto.getCodigo());
        assertNotNull(produtoDB);
        Assert.assertEquals("Calleb Camargo", produtoDB.getNome());

        excluir(produto.getCodigo());
        Produto produtoDB1 = this.produtoDAO.consultar(produto.getCodigo());
        assertNull(produtoDB1);
    }

    @Test
    public void buscarTodos() throws DAOException, TipoChaveNaoEncontradaException {
        criarProduto("P5");
        criarProduto("P6");
        Collection<Produto> list = produtoDAO.buscarTodos();
        assertTrue(list != null);
        assertTrue(list.size() == 2);

        for (Produto prod : list) {
            excluir(prod.getCodigo());
        }

        list = produtoDAO.buscarTodos();
        assertTrue(list != null);
        assertTrue(list.size() == 0);
    }
}
