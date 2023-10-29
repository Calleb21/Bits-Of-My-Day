package br.com.calleb.dao;

import br.com.calleb.domain.Curso;
import br.com.calleb.domain.Matricula;

public interface IMatriculaDao {

	Matricula cadastrar(Matricula mat);

	Matricula buscarPorCodigoCurso(String codigoCurso);

	Matricula buscarPorCurso(Curso curso);

	Matricula buscarPorCodigoCursoCriteria(String codigoCurso);

	Matricula buscarPorCursoCriteria(Curso curso);
}
