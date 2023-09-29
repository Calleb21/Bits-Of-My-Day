package br.com.calleb.dao.factory;

import br.com.calleb.domain.Produto;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Description of ProdutoFactory
 * Created by calle on 25/09/2023.
 */
public class ProdutoFactory {

    public static Produto convert(ResultSet rs) throws SQLException {
        Produto prod = new Produto();
        prod.setId(rs.getLong("ID_PRODUTO"));
        prod.setCodigo(rs.getString("CODIGO"));
        prod.setNome(rs.getString("NOME"));
        prod.setDescricao(rs.getString("DESCRICAO"));
        prod.setValor(rs.getBigDecimal("VALOR"));
        return prod;
    }
}
