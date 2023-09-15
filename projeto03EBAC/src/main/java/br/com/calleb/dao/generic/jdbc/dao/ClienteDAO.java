package br.com.calleb.dao.generic.jdbc.dao;

import br.com.calleb.domain.Cliente;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;
import java.util.List;

public class ClienteDAO implements IClienteDAO {
    private EntityManagerFactory entityManagerFactory;

    public ClienteDAO() {
        // Inicialize o EntityManagerFactory com a unidade de persistência apropriada (verifique seu persistence.xml)
        entityManagerFactory = Persistence.createEntityManagerFactory("conectionPostgre");
    }

    @Override
    public Integer cadastrar(Cliente cliente) {
        EntityManager entityManager = entityManagerFactory.createEntityManager();
        EntityTransaction transaction = entityManager.getTransaction();
        try {
            transaction.begin();
            entityManager.persist(cliente);
            transaction.commit();
        } catch (Exception e) {
            if (transaction != null && transaction.isActive()) {
                transaction.rollback();
            }
            throw e;
        } finally {
            entityManager.close();
        }
        return cliente.getId().intValue(); // Retorne o ID do cliente cadastrado
    }

    @Override
    public Integer atualizar(Cliente cliente) {
        EntityManager entityManager = entityManagerFactory.createEntityManager();
        EntityTransaction transaction = entityManager.getTransaction();
        try {
            transaction.begin();
            entityManager.merge(cliente);
            transaction.commit();
        } catch (Exception e) {
            if (transaction != null && transaction.isActive()) {
                transaction.rollback();
            }
            throw e;
        } finally {
            entityManager.close();
        }
        return cliente.getId().intValue(); // Retorne o ID do cliente atualizado
    }

    @Override
    public Cliente consultar(String codigo) {
        EntityManager entityManager = entityManagerFactory.createEntityManager();
        return entityManager.find(Cliente.class, codigo);
    }

    @Override
    public Integer excluir(Cliente cliente) {
        EntityManager entityManager = entityManagerFactory.createEntityManager();
        EntityTransaction transaction = entityManager.getTransaction();
        try {
            transaction.begin();
            cliente = entityManager.merge(cliente); // Mesclar a entidade antes de removê-la
            entityManager.remove(cliente);
            transaction.commit();
        } catch (Exception e) {
            if (transaction != null && transaction.isActive()) {
                transaction.rollback();
            }
            throw e;
        } finally {
            entityManager.close();
        }
        return cliente.getId().intValue(); // Retorne o ID do cliente excluído
    }

    @Override
    public List<Cliente> buscarTodos() {
        EntityManager entityManager = entityManagerFactory.createEntityManager();
        return entityManager.createQuery("SELECT c FROM Cliente c", Cliente.class).getResultList();
    }
}
