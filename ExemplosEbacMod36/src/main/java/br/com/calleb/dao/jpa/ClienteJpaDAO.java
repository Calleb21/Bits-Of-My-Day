package br.com.calleb.dao.jpa;

import br.com.calleb.dao.generic.GenericJpaDB1DAO;
import br.com.calleb.domain.ClienteJpa;

public class ClienteJpaDAO extends GenericJpaDB1DAO<ClienteJpa, Long> implements IClienteJpaDAO<ClienteJpa> {

	public ClienteJpaDAO() {
		super(ClienteJpa.class);
	}
}
