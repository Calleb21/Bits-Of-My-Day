package br.com.calleb.dao;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import br.com.calleb.domain.Curso;

public class CursoDao implements ICursoDao {

	private EntityManagerFactory emf;

	public CursoDao() {
		emf = Persistence.createEntityManagerFactory("ExemploJPA");
	}

	@Override
	public Curso cadastrar(Curso curso) {
		EntityManager em = emf.createEntityManager();
		try {
			em.getTransaction().begin();
			em.persist(curso);
			em.getTransaction().commit();
			return curso;
		} finally {
			em.close();
		}
	}
}
