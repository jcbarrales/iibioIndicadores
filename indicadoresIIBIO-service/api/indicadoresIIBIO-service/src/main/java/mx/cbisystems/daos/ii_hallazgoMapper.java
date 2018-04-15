package mx.cbisystems.daos;

import mx.cbisystems.models.ii_hallazgo;
import org.skife.jdbi.v2.StatementContext;
import org.skife.jdbi.v2.tweak.ResultSetMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by jcesar23mx on 01/06/2017.
 */
public class ii_hallazgoMapper implements ResultSetMapper<ii_hallazgo> {

    @Override
    public ii_hallazgo map(int i, ResultSet resultSet, StatementContext statementContext) throws SQLException {
      return  new ii_hallazgo(
              resultSet.getInt("ii_idcliente"),
              resultSet.getString("ii_estado"),
              resultSet.getInt("ii_zona"),
              resultSet.getInt("ii_jurisdiccion"),
              resultSet.getString("ii_municipio"),
              resultSet.getString("ii_unidadmedica"),
              resultSet.getString("ii_sexo"),
              resultSet.getInt("mes"),
              resultSet.getInt("anio"),
              resultSet.getInt("idii_hallazgos"),
              resultSet.getString("ii_hallazgostitulo"),
              resultSet.getString("ii_hallazgosinterpreta"),
              resultSet.getFloat("ii_hallazgosmin"),
              resultSet.getFloat("ii_hallazgosmax"),
              resultSet.getInt("valor")
      );
    };
}
