package br.com.calleb.dao;

import br.com.calleb.domain.Cliente;

/**
 * Description of ClienteDAOMock
 * Created by calle on 01/08/2023.
 */
public class ClienteDAOMock implements IClienteDAO {

    @Override
    public void salvar(Cliente cliente) {

    }

    @Override
    public Cliente buscarPorCpf(Long cpf) {
        Cliente cliente = new Cliente();
        cliente.setCpf(cpf);
        return cliente;
    }
}
