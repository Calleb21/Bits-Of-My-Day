package br.com.calleb.dao;

import br.com.calleb.domain.Curso;

import java.util.List;

/**
 * Description of ICursoDao
 * Created by calle on 14/11/2023.
 */
public interface ICursoDao {

    public Curso cadastrar(Curso curso);

    public void excluir(Curso cur);

    public List<Curso> buscarTodos();
}
