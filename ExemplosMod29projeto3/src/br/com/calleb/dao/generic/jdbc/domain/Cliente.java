package br.com.calleb.dao.generic.jdbc.domain;

import java.util.Objects;

/**
 * Description of Cliente
 * Created by calle on 19/09/2023.
 */
public class Cliente {

    private Long id;
    private String codigo;
    private String nome;

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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Cliente cliente = (Cliente) o;
        return Objects.equals(codigo, cliente.codigo);
    }

    @Override
    public int hashCode() {
        return Objects.hash(codigo);
    }
}
