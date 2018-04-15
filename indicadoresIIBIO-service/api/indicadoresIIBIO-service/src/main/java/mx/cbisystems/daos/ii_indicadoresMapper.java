package mx.cbisystems.daos;

import mx.cbisystems.models.ii_indicadores;
import org.skife.jdbi.v2.StatementContext;
import org.skife.jdbi.v2.tweak.ResultSetMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by Manuel on 20/05/2017.
 */
public class ii_indicadoresMapper implements ResultSetMapper<ii_indicadores>{
    @Override
    public ii_indicadores map(int i, ResultSet resultSet, StatementContext statementContext) throws SQLException {
        return new ii_indicadores(
                resultSet.getInt("ii_inId"),
                resultSet.getString("ii_inNombreIndicador"),
                resultSet.getString("ii_inTituloIndicador"),
                resultSet.getString("ii_inDescripcionIndicador"),
                resultSet.getInt("ii_inFormatoIndicador"),
                resultSet.getInt("ii_inOrdenIndicador"),
                resultSet.getInt("ii_inGrupoIndicador"),
                resultSet.getString("ii_inEjeXIndicador"),
                resultSet.getString("ii_inEjeYIndicador"),
                resultSet.getString("ii_inSerieIndicador"),
                resultSet.getString("ii_inEjeXOrdenIndicador"),
                resultSet.getInt("ii_inIdCliente")

        );
    }
}
