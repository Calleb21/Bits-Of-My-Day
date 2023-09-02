package br.com.calleb.dao.generic.jdbc.dao;

import br.com.calleb.dao.generic.jdbc.ConnectionFactory;
import br.com.calleb.domain.Produto;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

/**
 * Description of ProdutoDAO
 * Created by calle on 01/09/2023.
 */
public class ProdutoDAO implements IProdutoDAO {
    @Override
    public Integer cadastrar(Produto produto) throws Exception {
        Connection connection = null;
        PreparedStatement stm = null;
        try {
            connection = ConnectionFactory.getConnection();
            String sql = "INSERT INTO produto (id, codigo, nome) VALUES (nextval('produto_seq'), ?, ?)";
            stm = connection.prepareStatement(sql);
            stm.setString(1, produto.getCodigo());
            stm.setString(2, produto.getNome());
            return stm.executeUpdate();
        } catch (Exception e) {
            throw e;
        } finally {
            if (stm != null && !stm.isClosed()) {
                stm.close();
            }
            if (connection != null && !connection.isClosed()) {
                connection.close();
            }
        }
    }

    @Override
    public Produto consultar(String codigo) throws Exception {
        Connection connection = null;
        PreparedStatement stm = null;
        ResultSet rs = null;
        Produto produto = null;
        try {
            connection = ConnectionFactory.getConnection();
            String sql = "select * from produto where codigo = ?";
            stm = connection.prepareStatement(sql);
            stm.setString(1, codigo);
            rs = stm.executeQuery();
            if (rs.next()) {
                produto = new Produto();
                produto.setId(rs.getLong("id"));
                produto.setCodigo(rs.getString("codigo"));
                produto.setNome(rs.getString("nome"));
            }
            return produto;
        } catch (Exception e) {
            throw e;
        } finally {
            if (rs != null) {
                rs.close();
            }
            if (stm != null && !stm.isClosed()) {
                stm.close();
            }
            if (connection != null && !connection.isClosed()) {
                connection.close();
            }
        }
    }

    @Override
    public List<Produto> buscarTodosProdutos() throws Exception {
        Connection connection = null;
        PreparedStatement stm = null;
        ResultSet rs = null;
        List<Produto> list = new ArrayList<>();
        try {
            connection = ConnectionFactory.getConnection();
            String sql = "Select * from produto";
            stm = connection.prepareStatement(sql);
            rs = stm.executeQuery();

            while (rs.next()) {
                Produto produto = new Produto();
                String nome = rs.getString("NOME");
                String codigo = rs.getString("CODIGO");
                Long id = rs.getLong("ID");
                produto.setNome(nome);
                produto.setCodigo(codigo);
                produto.setId(id);
                list.add(produto);
            }
        } catch (Exception e) {
            throw e;
        } finally {
            if (rs != null) {
                rs.close();
            }
            if (stm != null && !stm.isClosed()) {
                stm.close();
            }
            if (connection != null && !connection.isClosed()) {
                connection.close();
            }
        }
        return list;
    }
}
