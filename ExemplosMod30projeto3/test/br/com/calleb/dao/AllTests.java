package br.com.calleb.dao;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;

/**
 * Description of AllTests
 * Created by calle on 25/09/2023.
 */
@RunWith(Suite.class)
@Suite.SuiteClasses({ClienteServiceTest.class, ClienteDAOTest.class,
        ProdutoServiceTest.class, ProdutoDAOTest.class,
        VendaDAOTest.class})
public class AllTests {
}
