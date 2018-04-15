package mx.cbisystems.daos;

import mx.cbisystems.models.ii_indicadores;
import org.skife.jdbi.v2.sqlobject.SqlQuery;
import org.skife.jdbi.v2.sqlobject.customizers.RegisterMapper;
import java.util.List;
/**
 * Created by Manuel on 20/05/2017.
 */
@RegisterMapper(ii_indicadoresMapper.class)
public interface ii_indicadoresDAO {
    @SqlQuery("SELECT ii_inId,\n" +
            "  ii_inNombreIndicador,\n" +
            "  ii_inTituloIndicador,\n" +
            "  ii_inDescripcionIndicador,\n" +
            "  ii_inFormatoIndicador,\n" +
            "  ii_inOrdenIndicador,\n" +
            "  ii_inGrupoIndicador,\n" +
            "  ii_inEjeXIndicador,\n" +
            "  ii_inEjeYIndicador,\n" +
            "  ii_inSerieIndicador,\n" +
            "  ii_inEjeXOrdenIndicador,\n" +
            "  ii_inIdCliente\n" +
            " FROM ii_indicadores;\n")
    List<ii_indicadores> getii_indicadores();

}
