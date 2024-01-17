package br.com.calleb.dao.generic;

import java.io.Serializable;

import br.com.calleb.domain.Persistente;

public abstract class GenericJpaDB2DAO<T extends Persistente, E extends Serializable> extends GenericJpaDAO<T, E> {

	public GenericJpaDB2DAO(Class<T> persistenteClass) {
		super(persistenteClass, "Postgre2");
	}
}
