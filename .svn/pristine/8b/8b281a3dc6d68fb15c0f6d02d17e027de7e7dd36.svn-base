package mx.cbisystems.daos;

import mx.cbisystems.models.ii_indicadorheader;
import org.skife.jdbi.v2.sqlobject.SqlQuery;
import org.skife.jdbi.v2.sqlobject.customizers.RegisterMapper;

import java.util.List;

/**
 * Created by jcesar23mx on 26/05/2017.
 */
@RegisterMapper(ii_IndicadorHeaderMapper.class)
public interface ii_indicadorHeaderDao {
    @SqlQuery("SELECT idii_headerindicador,\n" +
            "  ii_headerindicadorkey,\n" +
            "  ii_headerindicadorvalue,\n" +
            "  ii_headerindicadorvaluelarge,\n" +
            " FROM iibioindicadores.ii_headerindicador;\n")
        List<ii_indicadorheader> getindicadorheader();
}
