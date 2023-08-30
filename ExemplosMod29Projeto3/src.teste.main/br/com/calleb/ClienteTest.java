package br.com.calleb;

import br.com.calleb.dao.generic.jdbc.IClienteDAO;
import br.com.calleb.dao.generic.jdbc.dao.ClienteDAO;
import br.com.calleb.domain.Cliente;
import org.junit.Test;

import static org.junit.Assert.*;

/**
 * Description of ClienteTest
 * Created by calle on 30/08/2023.
 */
public class ClienteTest {

    @Test
    public void cadastrarTest() throws Exception {
        IClienteDAO dao = new ClienteDAO();

        Cliente cliente = new Cliente();
        cliente.setCodigo("01");
        cliente.setNome("Calleb Camargo");

        Integer qtd = dao.cadastrar(cliente);
        assertTrue(qtd == 1);

        Cliente clienteBD = dao.consultar(cliente.getCodigo());
        assertNotNull(clienteBD);
        assertNotNull(clienteBD.getId());
        assertEquals(cliente.getCodigo(), clienteBD.getCodigo());
        assertEquals(cliente.getNome(), clienteBD.getNome());

        Integer qtdDel = dao.excluir(clienteBD);
        assertNotNull(qtdDel);


    }
}
