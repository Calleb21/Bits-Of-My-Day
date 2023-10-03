package br.com.calleb.dao.dao;

import br.com.calleb.dao.IClienteDAO;
import br.com.calleb.domain.Cliente;
import br.com.calleb.exceptions.TipoChaveNaoEncontradaException;

import java.util.Collection;

/**
 * Description of ClienteDaoMock
 * Created by calle on 25/09/2023.
 */
public class ClienteDaoMock implements IClienteDAO {

    @Override
    public Boolean cadastrar(Cliente entity) throws TipoChaveNaoEncontradaException {
        // TODO Auto-generated method stub
        return true;
    }

    @Override
    public void excluir(Long valor) {
        // TODO Auto-generated method stub

    }

    @Override
    public void alterar(Cliente entity) throws TipoChaveNaoEncontradaException {
        // TODO Auto-generated method stub

    }

    @Override
    public Cliente consultar(Long valor) {
        Cliente cliente = new Cliente();
        cliente.setCpf(valor);
        return cliente;
    }

    @Override
    public Collection<Cliente> buscarTodos() {
        // TODO Auto-generated method stub
        return null;
    }
}
