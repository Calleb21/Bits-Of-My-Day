package br.com.calleb.dao;

import br.com.calleb.domain.Curso;
import br.com.calleb.domain.Matricula;

import java.util.List;

/**
 * Description of IMatriculaDao
 * Created by calle on 14/11/2023.
 */
public interface IMatriculaDao {

    Matricula cadastrar(Matricula mat);

    Matricula buscarPorCodigoCurso(String codigoCurso);

    Matricula buscarPorCurso(Curso curso);

    Matricula buscarPorCodigoCursoCriteria(String codigoCurso);

    Matricula buscarPorCursoCriteria(Curso curso);

    List<Matricula> buscarTodos();

    void excluir(Matricula matricula);
}
