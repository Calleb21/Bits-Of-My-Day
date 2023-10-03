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

import static org.junit.Assert.assertTrue;

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
        assertTrue(retorno);

        Cliente clienteConsultado = clienteDAO.consultar(cliente.getCpf());
        Assert.assertNotNull(clienteConsultado);

        clienteDAO.excluir(cliente.getCpf());
    }

    @Test
    public void excluirCliente() throws TipoChaveNaoEncontradaException, MaisDeUmRegistroException, TableException, DAOException {
        Cliente cliente = new Cliente();
        cliente.setCpf(14145245284L);
        cliente.setNome("Calleb Camargo");
        cliente.setCidade("Caldas Novas");
        cliente.setEstado("GO");
        cliente.setEnd("Rua teste, numero Teste");
        cliente.setNumero(34);
        cliente.setTel(2456686357L);
        Boolean retorno = clienteDAO.cadastrar(cliente);
        assertTrue(retorno);

        Cliente clienteConsultado = clienteDAO.consultar(cliente.getCpf());
        Assert.assertNotNull(clienteConsultado);

        clienteDAO.excluir(cliente.getCpf());
        clienteConsultado = clienteDAO.consultar(cliente.getCpf());
        Assert.assertNull(clienteConsultado);
    }

    @Test
    public void alterarCliente() throws TipoChaveNaoEncontradaException, MaisDeUmRegistroException, TableException, DAOException {
        Cliente cliente = new Cliente();
        cliente.setCpf(14145245284L);
        cliente.setNome("Calleb Camargo");
        cliente.setCidade("Caldas Novas");
        cliente.setEstado("GO");
        cliente.setEnd("Rua teste, numero Teste");
        cliente.setNumero(34);
        cliente.setTel(2456686357L);
        Boolean retorno = clienteDAO.cadastrar(cliente);
        assertTrue(retorno);

        Cliente clienteConsultado = clienteDAO.consultar(cliente.getCpf());
        Assert.assertNotNull(clienteConsultado);

        clienteConsultado.setNome("Calleb C. Camargo");
        clienteDAO.alterar(clienteConsultado);

        Cliente clienteAlterado = clienteDAO.consultar(cliente.getCpf());
        Assert.assertNotNull(clienteAlterado);
        Assert.assertEquals("Calleb C. Camargo", clienteAlterado.getNome());

        clienteDAO.excluir(cliente.getCpf());
        clienteConsultado = clienteDAO.consultar(cliente.getCpf());
        Assert.assertNull(clienteConsultado);
    }

    @Test
    public void buscarTodos() throws TipoChaveNaoEncontradaException, DAOException {
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

        Cliente cliente1 = new Cliente();
        cliente1.setCpf(14145245276L);
        cliente1.setNome("Calleb Camargo");
        cliente1.setCidade("Caldas Novas");
        cliente1.setEstado("GO");
        cliente1.setEnd("Rua teste, numero Teste");
        cliente1.setNumero(34);
        cliente1.setTel(2456686357L);
        Boolean retorno1 = clienteDAO.cadastrar(cliente1);
        Assert.assertTrue(retorno1);

        Collection<Cliente> list = clienteDAO.buscarTodos();
        assertTrue(list != null);
        assertTrue(list.size() == 2);

        list.forEach(cli -> {
            try {
                clienteDAO.excluir(cli.getCpf());
            } catch (DAOException e) {
                e.printStackTrace();
            }
        });

        Collection<Cliente> list1 = clienteDAO.buscarTodos();
        assertTrue(list1 != null);
        assertTrue(list1.size() == 0);
    }
}
