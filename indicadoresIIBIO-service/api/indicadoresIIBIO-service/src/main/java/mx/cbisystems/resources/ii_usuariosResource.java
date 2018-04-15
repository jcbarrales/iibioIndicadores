package mx.cbisystems.resources;

import com.codahale.metrics.annotation.Timed;
import mx.cbisystems.daos.ii_usuariosDAO;
import mx.cbisystems.models.ii_usuarios;
import org.json.simple.JSONArray;
import org.json.simple.JSONValue;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.List;

/**
 * Created by Julio Barrales on 21/05/2017.
 */

@Path("ii_usuarios")
@Produces(MediaType.APPLICATION_JSON)
public class ii_usuariosResource {
    private final mx.cbisystems.daos.ii_usuariosDAO ii_usuariosDAO;

    public ii_usuariosResource(ii_usuariosDAO ii_usuariosDAO)
    { this.ii_usuariosDAO = ii_usuariosDAO;}


    @GET
    @Path("/list")
    public Response getii_usuarios () {
        List<ii_usuarios> ii_usuariosLista = ii_usuariosDAO.getii_usuarios();
        return Response.status((Response.Status.OK)).entity(ii_usuariosLista).build();
    }



    @POST
    @Path("/login")
    @Timed
    public Response authentication(@FormParam("username") String username,
                                   @FormParam("password") String password) {

        ii_usuarios result = ii_usuariosDAO.loginUser(username, password);

        if(result == null){
            return Response.status(Response.Status.UNAUTHORIZED).build();
        }

        return Response.status(Response.Status.OK).entity(result).build();
    }

    @GET
    @Path("/prueba")
    public Response getJson(){
        try{
            //System.out.print("Entro: " + "clase" );
            String data="[{'A':'a','B':'b','C':'c','D':'d','E':'e','F':'f','G':'g'}]";
            String data1 = "[{\"ii_IdCliente\": 1, \"IMC\": 1223, \"HGL\": 9, \"HAS\": 1608, \"COL\": 2, \"MAS\": 364, \"ANP\": 72, \"BIH\": 512, \"VIH\": 222}]";
            Object obj= JSONValue.parse(data1);
            JSONArray array=(JSONArray)obj;
            /*Object object=null;
            JSONArray arrayObj=null;
            JSONParser jsonParser=new JSONParser();
            object=jsonParser.parse(data);
            arrayObj=(JSONArray) object;
            JSONObject json = new JSONObject(data);*/
            System.out.print("Entro: " + array );
            return Response.status(Response.Status.OK).entity(array).build();
        }catch (Exception e){
            System.out.print("error: " + e.getMessage() + e.getCause());
            return Response.status(Response.Status.CONFLICT).build();
        }
    }



}
