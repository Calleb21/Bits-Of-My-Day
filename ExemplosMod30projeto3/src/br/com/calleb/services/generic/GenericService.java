package br.com.calleb.services.generic;

import br.com.calleb.dao.Persistente;
import br.com.calleb.dao.generic.IGenericDAO;
import br.com.calleb.exceptions.DAOException;
import br.com.calleb.exceptions.MaisDeUmRegistroException;
import br.com.calleb.exceptions.TableException;
import br.com.calleb.exceptions.TipoChaveNaoEncontradaException;

import java.io.Serializable;
import java.util.Collection;

/**
 * Description of GenericService
 * Created by calle on 25/09/2023.
 */
public class GenericService<T extends Persistente, E extends Serializable>
        implements IGenericService<T, E> {

    protected IGenericDAO<T, E> dao;

    public GenericService(IGenericDAO<T, E> dao) {
        this.dao = dao;
    }

    @Override
    public Boolean cadastrar(T entity) throws TipoChaveNaoEncontradaException, DAOException {
        return this.dao.cadastrar(entity);
    }

    @Override
    public void excluir(E valor) throws DAOException {
        this.dao.excluir(valor);
    }

    @Override
    public void alterar(T entity) throws TipoChaveNaoEncontradaException, DAOException {
        this.dao.alterar(entity);
    }

    @Override
    public T consultar(E valor) throws DAOException {
        try {
            return this.dao.consultar(valor);
        } catch (MaisDeUmRegistroException | TableException e) {
            // TODO Auto-generated catch block
            //TODO levantar um erro genérico
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public Collection<T> buscarTodos() throws DAOException {
        return this.dao.buscarTodos();
    }
}
