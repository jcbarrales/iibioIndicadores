package mx.cbisystems.models;

/**
 * Created by jcesar23mx on 30/05/2017.
 */
public class ii_indicadorWeb {

    private String resultado;

    public ii_indicadorWeb () {}

    public ii_indicadorWeb (
            String resultado
    )
    {
        this.resultado = resultado;
    }

    public String getResultado() {
        return resultado;
    }

    public void setResultado(String resultado) {
        this.resultado = resultado;
    }
}
