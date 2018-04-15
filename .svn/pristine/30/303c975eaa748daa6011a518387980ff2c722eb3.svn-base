package mx.cbisystems.daos;

import mx.cbisystems.models.ii_indicador01;
import org.skife.jdbi.v2.StatementContext;
import org.skife.jdbi.v2.tweak.ResultSetMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by Manuel on 19/05/2017.
 */
public class ii_Indicador01Mapper implements ResultSetMapper<ii_indicador01> {
    @Override
    public ii_indicador01 map(int i, ResultSet resultSet, StatementContext statementContext) throws SQLException {
        return new ii_indicador01(
                resultSet.getInt("ii_IdCliente"),
                resultSet.getInt("ii_Estado"),
                resultSet.getInt("ii_Zona"),
                resultSet.getInt("ii_Jurisdiccion"),
                resultSet.getInt("ii_Municipio"),
                resultSet.getInt("ii_UnidadMedica"),
                resultSet.getString("ii_FechaEstudio"),
                resultSet.getString("ii_Genero"),
                resultSet.getInt("ii_Total"),
                resultSet.getInt("ii_Id")

        );
    }
}
