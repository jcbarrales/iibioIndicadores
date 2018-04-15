package mx.cbisystems.daos;

import mx.cbisystems.models.ii_indicador;
import org.skife.jdbi.v2.StatementContext;
import org.skife.jdbi.v2.tweak.ResultSetMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by jcesar23mx on 24/05/2017.
 */
public class ii_indicadorMapper implements ResultSetMapper<ii_indicador> {


    @Override
    public ii_indicador map(int i, ResultSet resultSet, StatementContext statementContext) throws SQLException {
        return new ii_indicador(
                resultSet.getInt("ii_idcliente"),
                resultSet.getString("ii_estado"),
                resultSet.getInt("ii_zona"),
                resultSet.getInt("ii_jurisdiccion"),
                resultSet.getString("ii_municipio"),
                resultSet.getString("ii_unidadmedica"),
                resultSet.getString("ii_sexo"),
                resultSet.getInt("mes"),
                resultSet.getInt("anio"),
                resultSet.getString("llave"),
                resultSet.getInt("valor")
        );
    }
}
