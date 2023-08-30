package br.com.calleb.dao.generic.jdbc;

import br.com.calleb.domain.Cliente;

/**
 * Description of IClienteDAO
 * Created by calle on 30/08/2023.
 */
public interface IClienteDAO {

    public Integer cadastrar(Cliente cliente) throws Exception;

    Cliente consultar(String codigo) throws Exception;

    Integer excluir(Cliente clienteBD) throws Exception;
}
