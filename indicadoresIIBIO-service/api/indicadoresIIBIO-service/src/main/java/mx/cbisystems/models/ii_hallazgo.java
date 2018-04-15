package mx.cbisystems.models;

/**
 * Created by jcesar23mx on 01/06/2017.
 */
public class ii_hallazgo {
    private int ii_idcliente;
    private String ii_estado;
    private int ii_zona;
    private int ii_jurisdiccion;
    private String ii_municipio;
    private String ii_unidadmedica;
    private String ii_sexo;
    private int mes;
    private int anio;
    private int idii_hallazgos;
    private String  ii_hallazgotitulo;
    private String ii_hallazgosinterpreta;
    private float ii_hallazgosmin;
    private float ii_hallazgosmax;
    private int valor;

    public ii_hallazgo () {}

    public ii_hallazgo (
            int ii_idcliente,
            String ii_estado,
            int ii_zona,
            int ii_jurisdiccion,
            String ii_municipio,
            String ii_unidadmedica,
            String ii_sexo,
            int mes,
            int anio,
            int idii_hallazgos,
            String  ii_hallazgotitulo,
            String ii_hallazgosinterpreta,
            float ii_hallazgosmin,
            float ii_hallazgosmax,
            int valor)
    {
        this.ii_idcliente = ii_idcliente;
        this.ii_estado = ii_estado;
        this.ii_zona = ii_zona;
        this.ii_jurisdiccion = ii_jurisdiccion;
        this.ii_municipio = ii_municipio;
        this.ii_unidadmedica = ii_unidadmedica;
        this.ii_sexo = ii_sexo;
        this.mes = mes;
        this.anio = anio;
        this.idii_hallazgos = idii_hallazgos;
        this.ii_hallazgotitulo = ii_hallazgotitulo;
        this.ii_hallazgosinterpreta = ii_hallazgosinterpreta;
        this.ii_hallazgosmin = ii_hallazgosmin;
        this.ii_hallazgosmax = ii_hallazgosmax;
        this.valor = valor;

    }

    public int getIdii_hallazgos() {
        return idii_hallazgos;
    }

    public void setIdii_hallazgos(int idii_hallazgos) {
        this.idii_hallazgos = idii_hallazgos;
    }

    public int getIi_idcliente() {
        return ii_idcliente;
    }

    public void setIi_idcliente(int ii_idcliente) {
        this.ii_idcliente = ii_idcliente;
    }

    public String getIi_estado() {
        return ii_estado;
    }

    public void setIi_estado(String ii_estado) {
        this.ii_estado = ii_estado;
    }

    public int getIi_zona() {
        return ii_zona;
    }

    public void setIi_zona(int ii_zona) {
        this.ii_zona = ii_zona;
    }

    public int getIi_jurisdiccion() {
        return ii_jurisdiccion;
    }

    public void setIi_jurisdiccion(int ii_jurisdiccion) {
        this.ii_jurisdiccion = ii_jurisdiccion;
    }

    public String getIi_municipio() {
        return ii_municipio;
    }

    public void setIi_municipio(String ii_municipio) {
        this.ii_municipio = ii_municipio;
    }

    public String getIi_unidadmedica() {
        return ii_unidadmedica;
    }

    public void setIi_unidadmedica(String ii_unidadmedica) {
        this.ii_unidadmedica = ii_unidadmedica;
    }

    public String getIi_sexo() {
        return ii_sexo;
    }

    public void setIi_sexo(String ii_sexo) {
        this.ii_sexo = ii_sexo;
    }

    public int getMes() {
        return mes;
    }

    public void setMes(int mes) {
        this.mes = mes;
    }

    public int getAnio() {
        return anio;
    }

    public void setAnio(int anio) {
        this.anio = anio;
    }

    public String getIi_hallazgotitulo() {
        return ii_hallazgotitulo;
    }

    public void setIi_hallazgotitulo(String ii_hallazgotitulo) {
        this.ii_hallazgotitulo = ii_hallazgotitulo;
    }

    public String getIi_hallazgosinterpreta() {
        return ii_hallazgosinterpreta;
    }

    public void setIi_hallazgosinterpreta(String ii_hallazgosinterpreta) {
        this.ii_hallazgosinterpreta = ii_hallazgosinterpreta;
    }

    public float getIi_hallazgosmin() {
        return ii_hallazgosmin;
    }

    public void setIi_hallazgosmin(float ii_hallazgosmin) {
        this.ii_hallazgosmin = ii_hallazgosmin;
    }

    public float getIi_hallazgosmax() {
        return ii_hallazgosmax;
    }

    public void setIi_hallazgosmax(float ii_hallazgosmax) {
        this.ii_hallazgosmax = ii_hallazgosmax;
    }

    public int getValor() {
        return valor;
    }

    public void setValor(int valor) {
        this.valor = valor;
    }
}
