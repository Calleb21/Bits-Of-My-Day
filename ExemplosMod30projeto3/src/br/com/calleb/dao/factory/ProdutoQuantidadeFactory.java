package br.com.calleb.dao.factory;

import br.com.calleb.domain.Produto;
import br.com.calleb.domain.ProdutoQuantidade;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Description of ProdutoQuantidadeFactory
 * Created by calle on 25/09/2023.
 */
public class ProdutoQuantidadeFactory {

    public static ProdutoQuantidade convert(ResultSet rs) throws SQLException {
        Produto prod = ProdutoFactory.convert(rs);
        ProdutoQuantidade prodQ = new ProdutoQuantidade();
        prodQ.setProduto(prod);
        prodQ.setId(rs.getLong("ID"));
        prodQ.setQuantidade(rs.getInt("QUANTIDADE"));
        prodQ.setValorTotal(rs.getBigDecimal("VALOR_TOTAL"));
        return prodQ;
    }
}
