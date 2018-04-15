package mx.cbisystems.daos;

import mx.cbisystems.models.ii_usuarios;
import org.skife.jdbi.v2.StatementContext;
import org.skife.jdbi.v2.tweak.ResultSetMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by Manuel on 20/05/2017.
 */
public class ii_usuariosMapper implements ResultSetMapper<ii_usuarios>{
    @Override
    public ii_usuarios map(int i, ResultSet resultSet, StatementContext statementContext) throws SQLException {
        return new ii_usuarios(
                resultSet.getInt("ii_usIdCliente"),
                resultSet.getInt("ii_usId"),
                resultSet.getString("ii_usUsuario"),
                resultSet.getString("ii_uspassword")

        );
    }
}
