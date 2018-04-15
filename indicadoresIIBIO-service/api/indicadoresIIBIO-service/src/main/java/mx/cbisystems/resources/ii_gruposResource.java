package mx.cbisystems.resources;

import mx.cbisystems.daos.ii_gruposDAO;
import mx.cbisystems.models.ii_grupos;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.List;

/**
 * Created by Manuel on 21/05/2017.
 */
@Path("ii_grupos")
@Produces(MediaType.APPLICATION_JSON)
public class ii_gruposResource {
    private final mx.cbisystems.daos.ii_gruposDAO ii_gruposDAO;

    public ii_gruposResource(mx.cbisystems.daos.ii_gruposDAO ii_gruposDAO)
    { this.ii_gruposDAO = ii_gruposDAO;}
    @GET
    public Response getii_grupos () {
        List<ii_grupos> ii_gruposLista = ii_gruposDAO.getii_grupos();
        return Response.status((Response.Status.OK)).entity(ii_gruposLista).build();
    }
}
