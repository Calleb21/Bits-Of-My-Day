package br.com.calleb.dao.jpa;

import br.com.calleb.dao.generic.GenericJpaDB1DAO;
import br.com.calleb.domain.ProdutoJpa;

public class ProdutoJpaDAO extends GenericJpaDB1DAO<ProdutoJpa, Long> implements IProdutoJpaDAO {

	public ProdutoJpaDAO() {
		super(ProdutoJpa.class);
	}
}
