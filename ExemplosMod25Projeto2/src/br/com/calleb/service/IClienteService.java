package br.com.calleb.service;

import br.com.calleb.domain.Cliente;

/**
 * Description of IClienteService
 * Created by calle on 01/08/2023.
 */
public interface IClienteService {

    void salvar(Cliente cliente);

    Cliente buscarPorCpf(Long cpf);
}
