package mx.cbisystems.daos;

import mx.cbisystems.models.ii_grupos;
import org.skife.jdbi.v2.sqlobject.SqlQuery;
import org.skife.jdbi.v2.sqlobject.customizers.RegisterMapper;
import java.util.List;

/**
 * Created by Manuel on 20/05/2017.
 */
@RegisterMapper(ii_gruposMapper.class)
public interface ii_gruposDAO {
    @SqlQuery("SELECT ii_grClaveGrupo,\n" +
            " ii_grNombreGrupo,\n" +
            " ii_grFechaCaptura,\n" +
            " ii_grUsuarioCaptura\n" +
            " FROM ii_grupos;\n")
    List<ii_grupos> getii_grupos();
}
