package br.com.calleb;

import br.com.calleb.dao.ClienteDAOMock;
import br.com.calleb.dao.IClienteDAO;
import br.com.calleb.domain.Cliente;
import br.com.calleb.service.ClienteService;
import br.com.calleb.service.IClienteService;
import org.junit.Assert;
import org.junit.Test;

/**
 * Description of ClienteTest
 * Created by calle on 01/08/2023.
 */
public class ClienteTest {

    private IClienteService clienteService;

    public ClienteTest() {
        IClienteDAO dao = new ClienteDAOMock();
        clienteService = new ClienteService(dao);
    }

    @Test
    public void pesquisarCliente() {
        Cliente cliente = new Cliente();
        cliente.setCpf(12312312312L);
        cliente.setNome("Calleb Camargo");
        cliente.setCidade("Caldas Novas");
        cliente.setEstado("GO");
        cliente.setEnd("Rua 14, Número 60, Lt12");
        cliente.setCpf(12312345645L);
        cliente.setTel(64993331088L);
        cliente.setNumero(19);

        clienteService.salvar(cliente);

        Cliente clienteConsultado = clienteService.buscarPorCpf(cliente.getCpf());

        Assert.assertNotNull(clienteConsultado);
    }
}
