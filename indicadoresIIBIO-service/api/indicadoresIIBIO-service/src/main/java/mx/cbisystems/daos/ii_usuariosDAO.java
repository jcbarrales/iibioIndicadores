package mx.cbisystems.daos;

import mx.cbisystems.models.ii_usuarios;
import org.skife.jdbi.v2.sqlobject.Bind;
import org.skife.jdbi.v2.sqlobject.SqlQuery;
import org.skife.jdbi.v2.sqlobject.customizers.RegisterMapper;

import java.util.List;

/**
 * Created by Manuel on 20/05/2017.
 */
@RegisterMapper(ii_usuariosMapper.class)
public interface ii_usuariosDAO {
    @SqlQuery("SELECT ii_usIdCliente,\n" +
            " ii_usId,\n" +
            " ii_usUsuario,\n" +
            " ii_uspassword\n" +
            " FROM ii_usuarios;\n")
    List<ii_usuarios> getii_usuarios();


    @SqlQuery("SELECT ii_usIdCliente,\n" +
            " ii_usId,\n" +
            " ii_usUsuario,\n" +
            " ii_uspassword\n" +
            " FROM ii_usuarios where ii_usUsuario = :username and ii_uspassword = :password;\n")
    ii_usuarios loginUser(@Bind("username") String username,@Bind("password") String password);


}
