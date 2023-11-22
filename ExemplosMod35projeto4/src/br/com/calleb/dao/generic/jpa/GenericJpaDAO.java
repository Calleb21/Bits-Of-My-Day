//package br.com.calleb.dao.generic.jpa;
//
//import br.com.calleb.dao.Persistente;
//import br.com.calleb.exceptions.DAOException;
//import br.com.calleb.exceptions.MaisDeUmRegistroException;
//import br.com.calleb.exceptions.TableException;
//import br.com.calleb.exceptions.TipoChaveNaoEncontradaException;
//
//import java.io.Serializable;
//import java.util.Collection;
//import java.util.List;
//
///**
// * Description of GenericJpaDAO
// * Created by calle on 22/11/2023.
// */
//public class GenericJpaDAO <T extends Persistente, E extends Serializable> implements IGenericJapDAO <T,E> {
//    protected EntityManagerFactory entityManagerFactory;
//
//    protected EntityManager entityManager;
//
//    private Class<T> persistenteClass;
//
//    public GenericJpaDAO(Class<T> persistenteClass) {
//        this.persistenteClass = persistenteClass;
//    }
//
//    @Override
//    public T cadastrar(T entity) throws TipoChaveNaoEncontradaException, DAOException {
//        openConnection();
//        entityManager.persist(entity);
//        entityManager.getTransaction().commit();
//        closeConnection();
//        return entity;
//    }
//
//    @Override
//    public void excluir(T entity) throws DAOException {
//        openConnection();
//        entity = entityManager.merge(entity);
//        entityManager.remove(entity);
//        entityManager.getTransaction().commit();
//        closeConnection();
//    }
//
//    @Override
//    public T alterar(T entity) throws TipoChaveNaoEncontradaException, DAOException {
//        openConnection();
//        entity = entityManager.merge(entity);
//        entityManager.getTransaction().commit();
//        closeConnection();
//        return entity;
//    }
//
//    @Override
//    public T consultar(E valor) throws MaisDeUmRegistroException, TableException, DAOException {
//        openConnection();
//        T entity = entityManager.find(this.persistenteClass, valor);
//        entityManager.getTransaction().commit();
//        closeConnection();
//        return entity;
//    }
//
//    @Override
//    public Collection<T> buscarTodos() throws DAOException {
//        openConnection();
//        List<T> list =
//                entityManager.createQuery(getSelectSql(), this.persistenteClass).getResultList();
//        closeConnection();
//        return list;
//    }
//
//    protected void openConnection() {
//        entityManagerFactory =
//                Persistence.createEntityManagerFactory("ExemploJPA");
//        entityManager = entityManagerFactory.createEntityManager();
//        entityManager.getTransaction().begin();
//    }
//
//    protected void closeConnection() {
//        entityManager.close();
//        entityManagerFactory.close();
//    }
//
//    private String getSelectSql() {
//        StringBuilder sb = new StringBuilder();
//        sb.append("SELECT obj FROM ");
//        sb.append(this.persistenteClass.getSimpleName());
//        sb.append(" obj");
//        return sb.toString();
//    }
//}
