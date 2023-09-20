package br.com.calleb.dao.generic.jdbc.dao;

import java.util.Objects;

/**
 * Description of ProdutoDAO
 * Created by calle on 20/09/2023.
 */
public class ProdutoDAO implements IProdutoDAO {

    private Long id;
    private String codigo;
    private String nome;
    private String estadoSigla;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEstadoSigla() {
        return estadoSigla;
    }

    public void setEstadoSigla(String estadoSigla) {
        this.estadoSigla = estadoSigla;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ProdutoDAO that = (ProdutoDAO) o;
        return Objects.equals(id, that.id) && Objects.equals(codigo, that.codigo) && Objects.equals(nome, that.nome) && Objects.equals(estadoSigla, that.estadoSigla);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, codigo, nome, estadoSigla);
    }
}
