package br.com.calleb;

import br.com.calleb.dao.CursoDao;
import br.com.calleb.dao.ICursoDao;
import br.com.calleb.domain.Curso;
import org.junit.Test;

import static org.junit.Assert.assertNotNull;

/**
 * Description of CursoTest
 * Created by calle on 14/11/2023.
 */
public class CursoTest {

    private ICursoDao cursoDao;

    public CursoTest() {
        cursoDao = new CursoDao();
    }

    @Test
    public void cadastrar() {
        Curso curso = new Curso();
        curso.setCodigo("A1");
        curso.setDescricao("CURSO TESTE - Hibernate OGM");
        curso.setNome("Curso de Java Backend");
        curso = cursoDao.cadastrar(curso);

        assertNotNull(curso);
        assertNotNull(curso.getId());
    }
}
