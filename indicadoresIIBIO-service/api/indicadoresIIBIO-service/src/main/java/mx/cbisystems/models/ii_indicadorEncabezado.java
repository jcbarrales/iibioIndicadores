package mx.cbisystems.models;

import java.util.List;

/**
 * Created by jcesar23mx on 25/05/2017.
 */
public class ii_indicadorEncabezado {

    private List<ii_indicador> ListaIndicador;

    public ii_indicadorEncabezado(List<ii_indicador> listaIndicador) { ListaIndicador = listaIndicador;}

    public List<ii_indicador> getListaIndicador() {return  ListaIndicador; }

    public void setListaIndicador(List<ii_indicador> listaIndicador) { ListaIndicador = listaIndicador;}
}

