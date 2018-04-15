package mx.cbisystems.resources;

import mx.cbisystems.daos.ii_indicadoresDAO;
import mx.cbisystems.models.ii_indicadores;
import mx.cbisystems.models.ii_indicadoresEncabezado;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.List;

/**
 * Created by Manuel on 21/05/2017.
 */
@Path("ii_indicadores")
@Produces(MediaType.APPLICATION_JSON)
public class ii_indicadoresResource {
    private final ii_indicadoresDAO ii_indicadoresDAO;

    public ii_indicadoresResource(ii_indicadoresDAO ii_indicadoresDAO)
    { this.ii_indicadoresDAO = ii_indicadoresDAO;}
    @GET
    public Response getii_indicadores () {
        List<ii_indicadores> ii_indicadoresLista = ii_indicadoresDAO.getii_indicadores();
        ii_indicadoresEncabezado encabezado = new ii_indicadoresEncabezado(ii_indicadoresLista);
        return Response.status((Response.Status.OK)).entity(encabezado).build();
        //return Response.status((Response.Status.OK)).entity(ii_indicadoresLista).build();
    }
}
