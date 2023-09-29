package br.com.calleb.dao;

import br.com.calleb.dao.generic.IGenericDAO;
import br.com.calleb.domain.Venda;
import br.com.calleb.exceptions.DAOException;
import br.com.calleb.exceptions.TipoChaveNaoEncontradaException;

/**
 * Description of IVendaDAO
 * Created by calle on 25/09/2023.
 */
public interface IVendaDAO extends IGenericDAO<Venda, String> {

    public void finalizarVenda(Venda venda) throws TipoChaveNaoEncontradaException, DAOException;

    public void cancelarVenda(Venda venda) throws TipoChaveNaoEncontradaException, DAOException;
}
