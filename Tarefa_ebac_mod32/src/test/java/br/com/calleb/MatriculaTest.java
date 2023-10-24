package br.com.calleb;

import static org.junit.Assert.assertNotNull;

import java.time.Instant;

import org.junit.Test;

import br.com.calleb.dao.IMatriculaDao;
import br.com.calleb.dao.MatriculaDao;
import br.com.calleb.domain.Matricula;

public class MatriculaTest {

private IMatriculaDao matriculaDao;
	
	public MatriculaTest() {
		matriculaDao = new MatriculaDao();
	}

	@Test
	public void cadastrar() {
		Matricula mat = new Matricula();
		mat.setCodigo("A1");
		mat.setDataMatricula(Instant.now());
		mat.setStatus("ATIVA");
		mat.setValor(2000d);
		mat = matriculaDao.cadastrar(mat);
		
		assertNotNull(mat);
		assertNotNull(mat.getId());
	}
	
	//TODO Adicionar como atividade extra as Implementações de consultar, excluir, alterar e consultar todos
	
	//TODO Como atividade principal do módulo: Com base nesse projeto, crie um novo projeto, crie uma classe 
	//chamada produto com 3 propriedades utilizando o JPA e adicione as implementações acima!  
}

