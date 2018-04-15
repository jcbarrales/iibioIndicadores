package mx.cbisystems.resources;

import mx.cbisystems.daos.ii_indicadorWebDAO;
import mx.cbisystems.models.ii_indicadorWeb;
import org.json.simple.JSONArray;
import org.json.simple.JSONValue;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.List;

/**
 * Created by jcesar23mx on 30/05/2017.
 */
@Path("ii_Catalogo")
@Produces(MediaType.APPLICATION_JSON)
public class ii_indicadorWebResource {
    private final ii_indicadorWebDAO ii_indicadorWebDAO;

    public ii_indicadorWebResource(ii_indicadorWebDAO ii_IndicadorWebDAO) {
        this.ii_indicadorWebDAO = ii_IndicadorWebDAO;
    }

    @GET
    @Path("/n2_01_dataavg/{estado}/{estudio}/{mes}/{ejercicio}")
    public Response get_ii_indicadorWebAvgPrincipal(@PathParam("estado") String estado,
                                                    @PathParam("estudio") String estudio,
                                                    @PathParam("mes") String mes,
                                                    @PathParam("ejercicio") String ejercicio) {

        String ii_indicadorWebLista = ii_indicadorWebDAO.get_ii_indicadorWebAvgPrincipal(estado, estudio, mes, ejercicio);
        Object objLista = JSONValue.parse(ii_indicadorWebLista);
        JSONArray JSONArray = (JSONArray)objLista;

        //return Response.status(Response.Status.OK).entity(ii_indicadorWebLista).build();
        return Response.status(Response.Status.OK).entity(JSONArray).build();
    }

    @GET
    @Path("/n2_01_data/{estado}/{estudio}/{mes}/{ejercicio}")
    public Response get_ii_indicadorWebPrincipal(@PathParam("estado") String estado,
                                                 @PathParam("estudio") String estudio,
                                                 @PathParam("mes") String mes,
                                                 @PathParam("ejercicio") String ejercicio) {

        String ii_indicadorWebLista = ii_indicadorWebDAO.get_ii_indicadorWebPrincipal(estado, estudio, mes, ejercicio);
        Object objLista = JSONValue.parse(ii_indicadorWebLista);
        JSONArray JSONArray = (JSONArray)objLista;

        //return Response.status(Response.Status.OK).entity(ii_indicadorWebLista).build();
        return Response.status(Response.Status.OK).entity(JSONArray).build();
    }

    @GET
    @Path("/n2_01_dataSector/{estado}/{estudio}/{mes}/{ejercicio}/{consulta}")
    public Response get_ii_indicadorSectorial(@PathParam("estado") String estado,
                                                 @PathParam("estudio") String estudio,
                                                 @PathParam("mes") String mes,
                                                 @PathParam("ejercicio") String ejercicio,
                                                 @PathParam("consulta") String consulta) {

        try {
            String ii_indicadorWebLista = ii_indicadorWebDAO.get_ii_indicadorSectorial(estado, estudio, mes, ejercicio,consulta);
            Object objLista = JSONValue.parse(ii_indicadorWebLista);
            JSONArray JSONArray = (JSONArray)objLista;


            return Response.status(Response.Status.OK).entity(JSONArray).build();
        }
        catch (Exception e) {
            System.out.print("Error" + e.getMessage() + e.getCause());
            return Response.status((Response.Status.CONFLICT)).build();
        }
    }

    @GET
    @Path("/cat_Meses")
    public Response get_cat_Meses() {
        try {
            String catMesesLista = ii_indicadorWebDAO.get_cat_Meses();
            Object objLista = JSONValue.parse(catMesesLista);
            JSONArray JSONArray = (JSONArray)objLista;

            return Response.status(Response.Status.OK).entity(JSONArray).build();
        }
        catch (Exception e) {
            System.out.print("Error"+ e.getMessage() + e.getCause());
            return Response.status((Response.Status.CONFLICT)).build();
        }
    }

    @GET
    @Path("/cat_Municipios")
    public Response get_cat_Municipio() {
        try {
            List<ii_indicadorWeb> catMposLista = ii_indicadorWebDAO.get_cat_Municipio();
            return Response.status((Response.Status.OK)).entity(catMposLista).build();
        }
            catch (Exception e) {
            System.out.print("Error"+ e.getMessage() + e.getCause());
            return Response.status((Response.Status.CONFLICT)).build();
        }
    }

    @GET
    @Path("/n2_02_data/{estado}/{claveh}/{nombreh}/{estudio}/{mes}/{ejercicio}/{consulta}")
    public Response get_listaindicadoresHallazgo(@PathParam("estado") String estado,
                                                 @PathParam("claveh") String claveh,
                                                 @PathParam("nombreh") String nombreh,
                                                 @PathParam("estudio") String estudio,
                                                 @PathParam("mes") String mes,
                                                 @PathParam("ejercicio") String ejercicio,
                                                 @PathParam("consulta") String consulta) {
        try {
            String ii_indicadorWebLista = ii_indicadorWebDAO.listaindicadoresHallazgo(estado, claveh, nombreh, estudio, mes, ejercicio,consulta);
            Object objLista = JSONValue.parse(ii_indicadorWebLista);
            JSONArray JSONArray = (JSONArray)objLista;


            return Response.status(Response.Status.OK).entity(JSONArray).build();
        }
        catch (Exception e) {
            System.out.print("Error" + e.getMessage() + e.getCause());
            return Response.status((Response.Status.CONFLICT)).build();
        }
    }
}
