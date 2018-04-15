package mx.cbisystems.daos;

import mx.cbisystems.models.ii_formato;
import org.skife.jdbi.v2.StatementContext;
import org.skife.jdbi.v2.tweak.ResultSetMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by Manuel on 20/05/2017.
 */
public class ii_formatoMapper implements ResultSetMapper<ii_formato>{
    @Override
    public ii_formato map(int i, ResultSet resultSet, StatementContext statementContext) throws SQLException {
        return new ii_formato(
                resultSet.getInt("ii_foClaveFormato"),
                resultSet.getString("ii_foNombreFormato"),
                resultSet.getString("ii_foFechaCaptura"),
                resultSet.getString("ii_foUsuarioCaptura")

        );
    }
}
