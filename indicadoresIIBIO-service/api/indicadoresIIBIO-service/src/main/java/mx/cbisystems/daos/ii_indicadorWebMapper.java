package mx.cbisystems.daos;

import mx.cbisystems.models.ii_indicadorWeb;
import org.skife.jdbi.v2.StatementContext;
import org.skife.jdbi.v2.tweak.ResultSetMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by jcesar23mx on 30/05/2017.
 */
public class ii_indicadorWebMapper implements ResultSetMapper<ii_indicadorWeb> {

    @Override
    public ii_indicadorWeb map(int i, ResultSet resultSet, StatementContext statementContext) throws SQLException {
        return new ii_indicadorWeb(
          resultSet.getString("resultado")
        );
    }
}
