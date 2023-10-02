package br.com.calleb.dao;

import br.com.calleb.domain.Cliente;
import br.com.calleb.exceptions.DAOException;
import br.com.calleb.exceptions.MaisDeUmRegistroException;
import br.com.calleb.exceptions.TableException;
import br.com.calleb.exceptions.TipoChaveNaoEncontradaException;
import org.junit.After;
import org.junit.Assert;
import org.junit.Test;

import java.util.Collection;

/**
 * Description of ClienteDAOTest
 * Created by calle on 25/09/2023.
 */
public class ClienteDAOTest {

    private final IClienteDAO clienteDAO;

    public ClienteDAOTest() {
        clienteDAO = new ClienteDAO();
    }

    @After
    public void end() throws DAOException {
        Collection<Cliente> list = clienteDAO.buscarTodos();
        list.forEach(cli -> {
            try {
                clienteDAO.excluir(cli.getCpf());
            } catch (DAOException e) {
                // TODO Auto-generated catch block
                e.printStackTrace();
            }
        });
    }

    @Test
    public void pesquisarCliente() throws MaisDeUmRegistroException, TableException, TipoChaveNaoEncontradaException, DAOException {
        Cliente cliente = new Cliente();
        cliente.setCpf(14145245284L);
        cliente.setNome("Calleb Camargo");
        cliente.setCidade("Caldas Novas");
        cliente.setEstado("GO");
        cliente.setEnd("Rua teste, numero Teste");
        cliente.setNumero(34);
        cliente.setTel(2456686357L);
        clienteDAO.cadastrar(cliente);

        Cliente clienteConsultado = clienteDAO.consultar(cliente.getCpf());
        Assert.assertNotNull(clienteConsultado);

        clienteDAO.excluir(cliente.getCpf());
    }

    @Test
    public void salvarCliente() throws TipoChaveNaoEncontradaException, MaisDeUmRegistroException, TableException, DAOException {
        Cliente cliente = new Cliente();
        cliente.setCpf(14145245284L);
        cliente.setNome("Calleb Camargo");
        cliente.setCidade("Caldas Novas");
        cliente.setEstado("GO");
        cliente.setEnd("Rua teste, numero Teste");
        cliente.setNumero(34);
        cliente.setTel(2456686357L);
        Boolean retorno = clienteDAO.cadastrar(cliente);
        Assert.assertTrue(retorno);

        Cliente clienteConsultado = clienteDAO.consultar(cliente.getCpf());
        Assert.assertNotNull(clienteConsultado);

        clienteDAO.excluir(cliente.getCpf());
    }
}
