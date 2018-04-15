package mx.cbisystems.daos;

import mx.cbisystems.models.ii_indicador;
import mx.cbisystems.models.ii_indicadorheader;
import org.skife.jdbi.v2.sqlobject.Bind;
import org.skife.jdbi.v2.sqlobject.SqlQuery;
import org.skife.jdbi.v2.sqlobject.SqlUpdate;
import org.skife.jdbi.v2.sqlobject.customizers.Mapper;
import org.skife.jdbi.v2.sqlobject.customizers.RegisterMapper;

import java.util.List;

/**
 * Created by jcesar23mx on 24/05/2017.
 */
@RegisterMapper(ii_indicadorMapper.class)
public interface ii_indicadorDAO {

    //*************************************************
    //CONSULTAS PARA GENERAR INFORMACIÓN MÓVIL
    //*************************************************
    //Selecciona la información del indicador 01 con los datos.
    //El indicador 01 es para presentar los resultados obtenidos
    @SqlQuery("SELECT ii_IdCliente,\n" +
            "  ii_Estado,\n" +
            "  ii_Zona,\n" +
            "  ii_Jurisdiccion,\n" +
            "  ii_Municipio,\n" +
            "  ii_UnidadMedica,\n" +
            "  ii_Sexo,\n" +
            "  mes,\n" +
            "  anio,\n" +
            "  llave,\n" +
            "  valor\n" +
            " FROM iibioindicadores.indicadorn2_01_data;\n")
    List<ii_indicador> getii_01();

    //Genera y transpone las columnas de indicadores para que lo pueda preparar la tableta
    @SqlUpdate("CALL crea_indicadores_tmp")
    void crea_Indicadores_tmp();

    //Selecciona la información del encabezado que se va a graficar.
    //El indicador 01 es para presentar el encabezado de los indicadores
    @SqlQuery("SELECT idii_headerindicador,\n" +
            "  ii_headerindicadorkey,\n" +
            "  ii_headerindicadorvalue,\n" +
            "  ii_headerindicadorvaluelarge\n" +
            " FROM iibioindicadores.ii_headerindicador;\n")
    @Mapper(ii_IndicadorHeaderMapper.class)
    List<ii_indicadorheader> getii_h01();

    //*************************************************
    // CONSULTAS PARA GENERAR INFORMACIÓN MÓVIL
    //*************************************************

    // Selecciona la información para el módulo web, en este momento será por estado, municipio y sexo faltará jurisdicción
    // Indidcador estudios.r
    @SqlQuery("CALL proc_listaindicadoresWeb (:estado,:municipio,:sexo,'','');")
    List<ii_indicador> getii_01_web(@Bind("estado") String estado, @Bind("municipio") String municipio, @Bind("sexo") String sexo);

}
