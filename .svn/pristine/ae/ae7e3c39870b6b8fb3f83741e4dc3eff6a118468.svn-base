package mx.cbisystems.daos;

import mx.cbisystems.models.ii_grupos;
import org.skife.jdbi.v2.StatementContext;
import org.skife.jdbi.v2.tweak.ResultSetMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by Manuel on 20/05/2017.
 */
public class ii_gruposMapper implements ResultSetMapper<ii_grupos>{
    @Override
    public ii_grupos map(int i, ResultSet resultSet, StatementContext statementContext) throws SQLException {
        return new ii_grupos(
                resultSet.getInt("ii_grClaveGrupo"),
                resultSet.getString("ii_grNombreGrupo"),
                resultSet.getString("ii_grFechaCaptura"),
                resultSet.getString("ii_grUsuarioCaptura")

        );
    }

}
