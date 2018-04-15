package mx.cbisystems.resources;

import mx.cbisystems.daos.ii_indicadorDAO;
import mx.cbisystems.models.ii_indicador;
import mx.cbisystems.models.ii_indicadorEncabezado;
import mx.cbisystems.models.ii_indicadoresHEncabezado;
import mx.cbisystems.models.ii_indicadorheader;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.List;

/**
 * Created by jcesar23mx on 24/05/2017.
 */
@Path("ii_Indicador")
@Produces(MediaType.APPLICATION_JSON)
public class ii_indicadorResource {

    private final ii_indicadorDAO ii_indicadorDAO;

    public ii_indicadorResource(ii_indicadorDAO ii_IndicadorDAO)
    { this.ii_indicadorDAO = ii_IndicadorDAO;}
    @GET
    @Path("/N2_01_data")
    public Response getii_01 () {
        //Va a borrar una tabla temporal tmp_datos_Estudios
        //y la va a reescribir con la información actualizada
        ii_indicadorDAO.crea_Indicadores_tmp();


        List<ii_indicador> ii_indicadorLista = ii_indicadorDAO.getii_01();
        ii_indicadorEncabezado encabezado = new ii_indicadorEncabezado(ii_indicadorLista );

        return Response.status((Response.Status.OK)).entity(encabezado).build();
        //return Response.status((Response.Status.OK)).entity(ii_indicador01Lista).build();
    }

    @GET
    @Path("/N2_01_header")
    public Response getii_h01() {

        List<ii_indicadorheader> ii_indicadorHeaderLista = ii_indicadorDAO.getii_h01();
        ii_indicadoresHEncabezado encabezado = new ii_indicadoresHEncabezado(ii_indicadorHeaderLista) ;

        return Response.status((Response.Status.OK)).entity(encabezado).build();

    }
/*
@GET
    @Path("leerrep_sospechosos/{fecha_reporte_inicial}/{hora_reporte_inicial}/{fecha_reporte_final}/{hora_reporte_final}")
    public Response getReporteS(@PathParam("fecha_reporte_inicial") String fecha_reporte_inicial,
                                @PathParam("hora_reporte_inicial") String hora_reporte_inicial,
                                @PathParam("fecha_reporte_final") String fecha_reporte_final,
                                @PathParam("hora_reporte_final") String hora_reporte_final){
        List<ReporteSospechosos> reporteSospechososList = reporteSospechososDAO.getReporteS(fecha_reporte_inicial, hora_reporte_inicial, fecha_reporte_final, hora_reporte_final);
        return Response.status(Response.Status.OK).entity(reporteSospechososList).build();
    }
 */
    @GET
    @Path("/N2_01_data_web/{estado}/{municipio}/{sexo}")
    public Response getii_01_web(@PathParam("estado") String estado,
                                 @PathParam("municipio") String municipio,
                                 @PathParam("sexo") String sexo) {
        try {
            List<ii_indicador> ii_indicadorListaWeb = ii_indicadorDAO.getii_01_web(estado, municipio, sexo);
            return Response.status((Response.Status.OK)).entity(ii_indicadorListaWeb).build();
        }
        catch (Exception e) {
            System.out.print("Error"+ e.getMessage() + e.getCause());
            return Response.status((Response.Status.CONFLICT)).build();
        }
    }
}
