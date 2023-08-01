package br.com.calleb.service;

import br.com.calleb.dao.ClienteDAO;
import br.com.calleb.dao.IClienteDAO;
import br.com.calleb.domain.Cliente;

/**
 * Description of ClienteService
 * Created by calle on 01/08/2023.
 */
public class ClienteService implements IClienteService {

    private IClienteDAO clienteDAO;

    public ClienteService(IClienteDAO clienteDAO) {
        this.clienteDAO = clienteDAO;
    }

    @Override
    public void salvar(Cliente cliente) {
        clienteDAO.salvar(cliente);
    }

    @Override
    public Cliente buscarPorCpf(Long cpf) {
        return clienteDAO.buscarPorCpf(cpf);
    }
}
