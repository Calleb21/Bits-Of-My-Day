package br.com.calleb.dao.generic.jdbc.dao;

import br.com.calleb.domain.Cliente;

import java.util.List;

/**
 * Description of IClienteDAO
 * Created by calle on 14/09/2023.
 */
public interface IClienteDAO {
    public Integer cadastrar(Cliente cliente) throws Exception;

    public Integer atualizar(Cliente cliente) throws Exception;

    Cliente consultar(String codigo) throws Exception;

    List<Cliente> buscarTodos() throws Exception;

    Integer excluir(Cliente clienteBD) throws Exception;
}
