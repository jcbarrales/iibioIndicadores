package mx.cbisystems.resources;

import mx.cbisystems.daos.ii_Indicador01DAO;
import mx.cbisystems.models.ii_indicador01;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.List;

/**
 * Created by Manuel on 19/05/2017.
 */
@Path("ii_Indicador01")
@Produces(MediaType.APPLICATION_JSON)
public class ii_Indicador01Resource {

    private final  ii_Indicador01DAO ii_indicador01DAO;


    public ii_Indicador01Resource(ii_Indicador01DAO ii_Indicador01DAO)
    { this.ii_indicador01DAO = ii_Indicador01DAO;}
        @GET
        public Response getii_Indicador01 () {
            List<ii_indicador01> ii_indicador01Lista = ii_indicador01DAO.getii_indicador01();
            return Response.status((Response.Status.OK)).entity(ii_indicador01Lista).build();
        }



}
