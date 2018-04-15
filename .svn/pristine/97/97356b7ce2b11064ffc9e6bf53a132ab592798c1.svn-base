package mx.cbisystems.resources;

import mx.cbisystems.daos.ii_formatoDAO;
import mx.cbisystems.models.ii_formato;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.List;

/**
 * Created by Manuel on 21/05/2017.
 */
@Path("ii_formato")
@Produces(MediaType.APPLICATION_JSON)
public class ii_formatoResource {
    private final mx.cbisystems.daos.ii_formatoDAO ii_formatoDAO;

    public ii_formatoResource(ii_formatoDAO ii_formatoDAO)
    { this.ii_formatoDAO = ii_formatoDAO;}
    @GET
    public Response getii_formato () {
        List<ii_formato> ii_formatoLista = ii_formatoDAO.getii_formato();
        return Response.status((Response.Status.OK)).entity(ii_formatoLista).build();
    }
}
