package mx.cbisystems.resources;

import mx.cbisystems.daos.ii_clientesDAO;
import mx.cbisystems.models.ii_clientes;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.List;

/**
 * Created by Manuel on 21/05/2017.
 */
@Path("ii_clientes")
@Produces(MediaType.APPLICATION_JSON)
public class ii_clientesResource {
    private final ii_clientesDAO ii_clientesDAO;

    public ii_clientesResource(ii_clientesDAO ii_Indicador01DAO)
    { this.ii_clientesDAO = ii_Indicador01DAO;}
    @GET
    public Response getii_Indicador01 () {
        List<ii_clientes> ii_clientesLista = ii_clientesDAO.getii_clientes();
        return Response.status((Response.Status.OK)).entity(ii_clientesLista).build();
    }
}
