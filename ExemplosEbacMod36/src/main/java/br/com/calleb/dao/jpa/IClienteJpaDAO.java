package br.com.calleb.dao.jpa;

import br.com.calleb.dao.generic.IGenericJapDAO;
import br.com.calleb.domain.Persistente;

public interface IClienteJpaDAO<T extends Persistente> extends IGenericJapDAO<T, Long>{

}
