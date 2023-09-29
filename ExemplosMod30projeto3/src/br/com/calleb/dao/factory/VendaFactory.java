package br.com.calleb.dao.factory;

import br.com.calleb.domain.Cliente;
import br.com.calleb.domain.Venda;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Description of VendaFactory
 * Created by calle on 25/09/2023.
 */
public class VendaFactory {

    public static Venda convert(ResultSet rs) throws SQLException {
        Cliente cliente = ClienteFactory.convert(rs);
        Venda venda = new Venda();
        venda.setCliente(cliente);
        venda.setId(rs.getLong("ID_VENDA"));
        venda.setCodigo(rs.getString("CODIGO"));
        venda.setValorTotal(rs.getBigDecimal("VALOR_TOTAL"));
        venda.setDataVenda(rs.getTimestamp("DATA_VENDA").toInstant());
        venda.setStatus(Venda.Status.getByName(rs.getString("STATUS_VENDA")));
        return venda;
    }
}
