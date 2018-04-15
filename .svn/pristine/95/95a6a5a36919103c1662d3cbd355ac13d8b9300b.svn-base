package mx.cbisystems.daos;

import mx.cbisystems.models.ii_clientes;
import org.skife.jdbi.v2.sqlobject.SqlQuery;
import org.skife.jdbi.v2.sqlobject.customizers.RegisterMapper;

import java.util.List;

/**
 * Created by Manuel on 20/05/2017.
 */
@RegisterMapper(ii_clientesMapper.class)
public interface ii_clientesDAO {
    @SqlQuery("SELECT ii_clId,\n" +
            " ii_clNombreCliente\n" +
            " FROM ii_clientes;\n")
    List<ii_clientes> getii_clientes();
}
