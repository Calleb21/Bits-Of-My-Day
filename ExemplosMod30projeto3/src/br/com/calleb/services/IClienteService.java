package br.com.calleb.services;

import br.com.calleb.domain.Cliente;
import br.com.calleb.exceptions.DAOException;
import br.com.calleb.services.generic.IGenericService;

/**
 * Description of IClienteService
 * Created by calle on 25/09/2023.
 */
public interface IClienteService extends IGenericService<Cliente, Long> {
    //	Boolean cadastrar(Cliente cliente) throws TipoChaveNaoEncontradaException;
//
    Cliente buscarPorCPF(Long cpf) throws DAOException;
//
//	void excluir(Long cpf);
//
//	void alterar(Cliente cliente) throws TipoChaveNaoEncontradaException;
}
