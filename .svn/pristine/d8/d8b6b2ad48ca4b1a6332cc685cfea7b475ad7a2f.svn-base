package mx.cbisystems.daos;

import mx.cbisystems.models.ii_indicador01;
import org.skife.jdbi.v2.sqlobject.SqlQuery;
import org.skife.jdbi.v2.sqlobject.customizers.RegisterMapper;
import java.util.List;
/**
 * Created by Manuel on 19/05/2017.
 */
@RegisterMapper(ii_Indicador01Mapper.class)
public interface ii_Indicador01DAO {
    @SqlQuery("SELECT ii_IdCliente,\n" +
            "  ii_Estado,\n" +
            "  ii_Zona,\n" +
            "  ii_Jurisdiccion,\n" +
            "  ii_Municipio,\n" +
            "  ii_UnidadMedica,\n" +
            "  ii_FechaEstudio,\n" +
            "  ii_Genero,\n" +
            "  ii_Total,\n" +
            "  ii_Id\n" +
            " FROM ii_indicador01;\n")
    List<ii_indicador01> getii_indicador01();
    //" where ii_Estado '" + estado + "';\n")
    //List<ii_indicador01> getii_indicador01(@Bind("estado") String estado);

    @SqlQuery("SELECT ii_IdCliente,\n" +
            "  ii_Estado,\n" +
            "  ii_Zona,\n" +
            "  ii_Jurisdiccion,\n" +
            "  ii_Municipio,\n" +
            "  ii_UnidadMedica,\n" +
            "  ii_FechaEstudio,\n" +
            "  ii_Genero,\n" +
            "  ii_Total,\n" +
            "  ii_Id\n" +
            " FROM iibioindicadores.ii_indicador02;\n")
    List<ii_indicador01> getii_indicador02();

}
