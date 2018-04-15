package mx.cbisystems.daos;

import mx.cbisystems.models.ii_indicadorWeb;
import org.skife.jdbi.v2.sqlobject.Bind;
import org.skife.jdbi.v2.sqlobject.SqlQuery;
import org.skife.jdbi.v2.sqlobject.customizers.RegisterMapper;

import java.util.List;

/**
 * Created by jcesar23mx on 30/05/2017.
 */
@RegisterMapper(ii_indicadorWebMapper.class)
public interface ii_indicadorWebDAO {
    //@SqlQuery("SELECT resultado FROM vista_indicadorwebjson")
    //String get_ii_indicadorWeb();

    @SqlQuery("CALL proc_listaindicadoresAvgPrincipal (:estado,:estudio,:mes,:ejercicio);")
    String get_ii_indicadorWebAvgPrincipal(@Bind("estado") String estado,
                                           @Bind("estudio") String estudio,
                                           @Bind("mes") String mes,
                                           @Bind("ejercicio") String ejercicio);

    @SqlQuery("CALL proc_listaindicadoresPrincipal (:estado,:estudio,:mes,:ejercicio);")
    String get_ii_indicadorWebPrincipal(@Bind("estado") String estado,
                                        @Bind("estudio") String estudio,
                                        @Bind("mes") String mes,
                                        @Bind("ejercicio") String ejercicio);

    @SqlQuery("CALL proc_listaindicadoresSectorial (:estado,:estudio,:mes,:ejercicio,:consulta);")
    String get_ii_indicadorSectorial(@Bind("estado") String estado,
                                        @Bind("estudio") String estudio,
                                        @Bind("mes") String mes,
                                        @Bind("ejercicio") String ejercicio,
                                        @Bind("consulta") String consulta);

    //proc_listameses
    @SqlQuery("CALL proc_listameses ();")
    String get_cat_Meses();


    @SqlQuery("CALL proc_listaCatalogos ('Municipio');")
    List<ii_indicadorWeb> get_cat_Municipio();

    @SqlQuery("CALL proc_listaindicadoresHallazgo (:estado,:claveH,:nombreH,:estudio,:mes,:ejercicio,:consulta);")
    String  listaindicadoresHallazgo(@Bind("estado") String estado,
                                     @Bind("claveH") String claveH,
                                     @Bind("nombreH") String nombreH,
                                     @Bind("estudio") String estudio,
                                     @Bind("mes") String mes,
                                     @Bind("ejercicio") String ejercicio,
                                     @Bind("consulta") String consulta);
}
