package br.com.calleb;

import static org.junit.Assert.assertNotNull;

import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import br.com.calleb.dao.CarroDao;
import br.com.calleb.dao.ICarroDao;
import br.com.calleb.domain.Carro;

/**
 * @author calle
 * 
 */
public class CarroTest {

	private ICarroDao carroDao;
	private EntityManagerFactory emf;

	@Before
	public void setUp() {
		emf = Persistence.createEntityManagerFactory("ExemploJPA");
		carroDao = new CarroDao();
	}

	@After
	public void tearDown() {
		emf.close();
	}

	public CarroTest() {
		carroDao = new CarroDao();
	}

	@Test
	public void cadastrarCarroTest() {
		Carro carroTest = new Carro();
		carroTest.setNome("BMW X6");
		carroTest.setCategoria("SUV");
		Carro carroCadastrado = carroDao.cadastrar(carroTest);

		assertNotNull(carroCadastrado);
		assertNotNull(carroCadastrado.getId());
	}
}
