package mx.cbisystems.resources;

import mx.cbisystems.daos.ii_hallazgoDAO;
import mx.cbisystems.models.ii_hallazgo;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.List;

/**
 * Created by jcesar23mx on 01/06/2017.
 */
@Path("ii_Hallazgo")
@Produces(MediaType.APPLICATION_JSON)

public class ii_hallazgoResource {

    private final ii_hallazgoDAO ii_hallazgoDAO;

    public ii_hallazgoResource(ii_hallazgoDAO ii_HallazgoDAO)
    {  this.ii_hallazgoDAO = ii_HallazgoDAO; }

    @GET
    @Path("/N3_Hallazgo/{estudio}/{estado}/{municipio}/{sexo}")
    public Response get_ii_hallazgo(@PathParam("estudio") String estudio,
                                    @PathParam("estado") String estado,
                                    @PathParam("municipio") String municipio,
                                    @PathParam("sexo") String sexo) {
        try {
            List<ii_hallazgo> ii_hallazgoTabla = ii_hallazgoDAO.get_ii_hallazgo(estudio, estado, municipio, sexo);
            return Response.status((Response.Status.OK)).entity(ii_hallazgoTabla).build();
        }
        catch (Exception e) {
            System.out.print("Error"+ e.getMessage() + e.getCause());
            return Response.status((Response.Status.CONFLICT)).build();
        }

    }
}
