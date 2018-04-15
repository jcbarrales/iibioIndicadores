package mx.cbisystems.models;

/**
 * Created by jcesar23mx on 26/05/2017.
 */
public class ii_indicadorheader {
    int idii_headerindicador;
    String ii_headerindicadorkey;
    String ii_headerindicadorvalue;
    String ii_headerindicadorvaluelarge;

    public ii_indicadorheader () {}

    public ii_indicadorheader (
            int idii_headerindicador,
            String ii_headerindicadorkey,
            String ii_headerindicadorvalue,
            String ii_headerindicadorvaluelarge) {
        this.idii_headerindicador = idii_headerindicador ;
        this.ii_headerindicadorkey = ii_headerindicadorkey;
        this.ii_headerindicadorvalue = ii_headerindicadorvalue;
        this.ii_headerindicadorvaluelarge = ii_headerindicadorvaluelarge;

    }

    public int getIdii_headerindicador() {
        return idii_headerindicador;
    }

    public void setIdii_headerindicador(int idii_headerindicador) {
        this.idii_headerindicador = idii_headerindicador;
    }

    public String getIi_headerindicadorkey() {
        return ii_headerindicadorkey;
    }

    public void setIi_headerindicadorkey(String ii_headerindicadorkey) {
        this.ii_headerindicadorkey = ii_headerindicadorkey;
    }

    public String getIi_headerindicadorvalue() {
        return ii_headerindicadorvalue;
    }

    public void setIi_headerindicadorvalue(String ii_headerindicadorvalue) {
        this.ii_headerindicadorvalue = ii_headerindicadorvalue;
    }

    public String getIi_headerindicadorvaluelarge() {
        return ii_headerindicadorvaluelarge;
    }

    public void setIi_headerindicadorvaluelarge(String ii_headerindicadorvaluelarge) {
        this.ii_headerindicadorvaluelarge = ii_headerindicadorvaluelarge;
    }
}
