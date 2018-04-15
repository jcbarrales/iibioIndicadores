package mx.cbisystems.daos;

import mx.cbisystems.models.ii_formato;
import org.skife.jdbi.v2.sqlobject.SqlQuery;
import org.skife.jdbi.v2.sqlobject.customizers.RegisterMapper;

import java.util.List;

/**
 * Created by Manuel on 20/05/2017.
 */
@RegisterMapper(ii_formatoMapper.class)
public interface ii_formatoDAO {
    @SqlQuery("SELECT ii_foClaveFormato,\n" +
            " ii_foNombreFormato,\n" +
            " ii_foFechaCaptura,\n" +
            " ii_foUsuarioCaptura\n" +
            " FROM ii_formato;\n")
    List<ii_formato> getii_formato();
}
