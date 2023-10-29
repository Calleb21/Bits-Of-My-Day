 package br.com.calleb;

import static org.junit.Assert.assertNotNull;

import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import br.com.calleb.dao.CursoDao;
import br.com.calleb.dao.ICursoDao;
import br.com.calleb.domain.Curso;

/**
 * @author calle
 * 
 */
public class CursoTest {

	private ICursoDao cursoDao;
	private EntityManagerFactory emf;

	@Before
	public void setUp() {
		emf = Persistence.createEntityManagerFactory("ExemploJPA");
		cursoDao = new CursoDao();
	}

	@After
	public void tearDown() {
		emf.close();
	}

	public CursoTest() {
		cursoDao = new CursoDao();
	}

	@Test
	public void cadastrarCursoTest() {
		Curso cursoTeste = new Curso();
		cursoTeste.setCodigo("A1");
		cursoTeste.setNome("Curso de Teste 1");
		cursoTeste.setDescricao("Teste 1");
		Curso cursoCadastrado = cursoDao.cadastrar(cursoTeste);

		assertNotNull(cursoCadastrado);
		assertNotNull(cursoCadastrado.getId());
	}
}
