package mx.cbisystems.models;

/**
 * Created by Manuel on 20/05/2017.
 */
public class ii_formato {

    private int ii_foClaveFormato;
    private String ii_foNombreFormato;
    private String ii_foFechaCaptura;
    private String ii_foUsuarioCaptura;

    public ii_formato() { }

    public ii_formato(
            int ii_foClaveFormato,
            String ii_foNombreFormato,
            String ii_foFechaCaptura,
            String ii_foUsuarioCaptura) {
        this.ii_foClaveFormato = ii_foClaveFormato;
        this.ii_foNombreFormato = ii_foNombreFormato;
        this.ii_foFechaCaptura = ii_foFechaCaptura;
        this.ii_foUsuarioCaptura = ii_foUsuarioCaptura;
    }

    public int getIi_foClaveFormato() {
        return ii_foClaveFormato;
    }

    public void setIi_foClaveFormato(int ii_foClaveFormato) {
        this.ii_foClaveFormato = ii_foClaveFormato;
    }

    public String getIi_foNombreFormato() {
        return ii_foNombreFormato;
    }

    public void setIi_foNombreFormato(String ii_foNombreFormato) {
        this.ii_foNombreFormato = ii_foNombreFormato;
    }

    public String getIi_foFechaCaptura() {
        return ii_foFechaCaptura;
    }

    public void setIi_foFechaCaptura(String ii_foFechaCaptura) {
        this.ii_foFechaCaptura = ii_foFechaCaptura;
    }

    public String getIi_foUsuarioCaptura() {
        return ii_foUsuarioCaptura;
    }

    public void setIi_foUsuarioCaptura(String ii_foUsuarioCaptura) {
        this.ii_foUsuarioCaptura = ii_foUsuarioCaptura;
    }
}
