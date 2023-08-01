package br.com.calleb.dao;

import br.com.calleb.domain.Cliente;

/**
 * Description of IClienteDAO
 * Created by calle on 01/08/2023.
 */
public interface IClienteDAO {

    void salvar(Cliente cliente);

    Cliente buscarPorCpf(Long cpf);
}
