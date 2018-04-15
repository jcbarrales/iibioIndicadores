package mx.cbisystems.daos;

import mx.cbisystems.models.ii_clientes;
import org.skife.jdbi.v2.StatementContext;
import org.skife.jdbi.v2.tweak.ResultSetMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by Manuel on 20/05/2017.
 */

public class ii_clientesMapper implements ResultSetMapper<ii_clientes> {
    @Override
    public ii_clientes map(int i, ResultSet resultSet, StatementContext statementContext) throws SQLException {
        return new ii_clientes(
                resultSet.getInt("ii_clId"),
                resultSet.getString("ii_clNombreCliente")
        );
    }
}
