package mx.cbisystems.daos;

import mx.cbisystems.models.ii_hallazgo;
import org.skife.jdbi.v2.sqlobject.Bind;
import org.skife.jdbi.v2.sqlobject.SqlQuery;
import org.skife.jdbi.v2.sqlobject.customizers.RegisterMapper;

import java.util.List;

/**
 * Created by jcesar23mx on 01/06/2017.
 */
@RegisterMapper(ii_hallazgoMapper.class)
public interface ii_hallazgoDAO {

    @SqlQuery("CALL proc_listaindicadoresEstudioWeb (:estudio,:estado,:municipio,:sexo,'','');")
    List<ii_hallazgo> get_ii_hallazgo(@Bind("estudio") String estudio, @Bind("estado") String estado, @Bind("municipio") String municipio, @Bind("sexo") String sexo );

}
