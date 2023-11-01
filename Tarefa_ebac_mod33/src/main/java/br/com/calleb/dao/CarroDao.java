package br.com.calleb.dao;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import br.com.calleb.domain.Carro;

public class CarroDao implements ICarroDao {

	private EntityManagerFactory emf;

	public CarroDao() {
		emf = Persistence.createEntityManagerFactory("ExemploJPA");
	}

	@Override
	public Carro cadastrar(Carro carro) {
		EntityManager em = emf.createEntityManager();
		try {
			em.getTransaction().begin();
			em.persist(carro);
			em.getTransaction().commit();
			return carro;
		} finally {
			em.close();
		}
	}
}
