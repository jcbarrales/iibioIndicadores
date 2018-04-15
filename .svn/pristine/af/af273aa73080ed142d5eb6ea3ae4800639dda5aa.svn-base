package mx.cbisystems.daos;

import mx.cbisystems.models.ii_indicadorheader;
import org.skife.jdbi.v2.StatementContext;
import org.skife.jdbi.v2.tweak.ResultSetMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by jcesar23mx on 26/05/2017.
 */
public class ii_IndicadorHeaderMapper  implements ResultSetMapper<ii_indicadorheader> {
    @Override
    public ii_indicadorheader map(int i, ResultSet resultSet, StatementContext statementContext) throws SQLException {
        return new ii_indicadorheader(
                resultSet.getInt("idii_headerindicador"),
                resultSet.getString("ii_headerindicadorkey"),
                resultSet.getString("ii_headerindicadorvalue"),
                        resultSet.getString("ii_headerindicadorvaluelarge")
        );
    }
}
