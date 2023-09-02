package br.com.calleb;

import br.com.calleb.dao.generic.jdbc.IClienteDAO;
import br.com.calleb.dao.generic.jdbc.dao.ClienteDAO;
import br.com.calleb.domain.Cliente;
import org.junit.Test;

import java.util.List;

import static org.junit.Assert.*;

/**
 * Description of ClienteTest
 * Created by calle on 30/08/2023.
 */
public class ClienteTest {

    private IClienteDAO clienteDAO;

    @Test
    public void cadastrarTest() throws Exception {
        IClienteDAO dao = new ClienteDAO();

        Cliente cliente = new Cliente();
        cliente.setCodigo("01");
        cliente.setNome("Calleb Camargo");
        Integer qtd = dao.cadastrar(cliente);
        assertTrue(qtd == 1);

        Cliente cliente1 = new Cliente();
        cliente1.setCodigo("03");
        cliente1.setNome("Lionel Messi");
        Integer qtd1 = dao.cadastrar(cliente1);
        assertTrue(qtd1 == 1);

        Cliente cliente2 = new Cliente();
        cliente2.setCodigo("02");
        cliente2.setNome("Rayane Lopes");
        Integer qtd2 = dao.cadastrar(cliente2);
        assertTrue(qtd2 == 1);
    }


    @Test
    public void consultarTest() throws Exception {
        clienteDAO = new ClienteDAO();

        Cliente cliente = new Cliente();
        cliente.setCodigo("04");
        cliente.setNome("Neymar Junior");
        Integer qtd = clienteDAO.cadastrar(cliente);
        assertTrue(qtd == 1);

        Cliente clienteBD = clienteDAO.consultar(cliente.getCodigo());
        assertNotNull(clienteBD);
        assertNotNull(clienteBD.getId());
        assertEquals(cliente.getCodigo(), clienteBD.getCodigo());
        assertEquals(cliente.getNome(), clienteBD.getNome());
    }


    @Test
    public void buscarTodosTest() throws Exception {
        clienteDAO = new ClienteDAO();

        try {
            List<Cliente> clientes = clienteDAO.buscarTodos();

            assertNotNull(clientes);

            assertTrue(clientes.size() > 0);

        } catch (Exception e) {
            fail("O teste lançou uma exceção: " + e.getMessage());
        }
    }

    @Test
    public void excluirTest() throws Exception {
        clienteDAO = new ClienteDAO();

        Cliente cliente = new Cliente();
        cliente.setCodigo("05");
        cliente.setNome("Neymar Santos");
        Integer countCad = clienteDAO.cadastrar(cliente);
        assertTrue(countCad == 1);

        Cliente clienteBD = clienteDAO.consultar("05");
        assertNotNull(clienteBD);
        assertEquals(cliente.getCodigo(), clienteBD.getCodigo());
        assertEquals(cliente.getNome(), clienteBD.getNome());

        Integer countDel = clienteDAO.excluir(clienteBD);
        assertTrue(countDel == 1);
    }

    @Test
    public void atualizarTest() throws Exception {
        clienteDAO = new ClienteDAO();

        Cliente cliente = new Cliente();
        cliente.setCodigo("04");
        cliente.setNome("Bruna Marquezine");
        Integer countCad = clienteDAO.cadastrar(cliente);
        assertTrue(countCad == 1);

        Cliente clienteBD = clienteDAO.consultar("04");
        assertNotNull(clienteBD);
        assertEquals(cliente.getCodigo(), clienteBD.getCodigo());
        assertEquals(cliente.getNome(), clienteBD.getNome());

        clienteBD.setCodigo("07");
        clienteBD.setNome("Bruna Biancardi"); // Atualiza o nome
        Integer atualizarNome = clienteDAO.atualizar(clienteBD);
        assertTrue(atualizarNome == 1);

        Cliente clienteBD1 = clienteDAO.consultar("04");
        assertNull(clienteBD1);

        Cliente clienteBD2 = clienteDAO.consultar("07");
        assertNotNull(clienteBD2);
        assertEquals(clienteBD.getId(), clienteBD2.getId());
        assertEquals(clienteBD.getCodigo(), clienteBD2.getCodigo());
        assertEquals(clienteBD.getNome(), clienteBD2.getNome());
    }
}
