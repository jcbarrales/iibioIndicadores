package mx.cbisystems.models;

/**
 * Created by Manuel on 20/05/2017.
 */
public class ii_usuarios {

    private int ii_usIdCliente;
    private int ii_usId;
    private String ii_usUsuario;
    private String ii_uspassword;

    public ii_usuarios() { }

    public ii_usuarios(
            int ii_usIdCliente,
            int ii_usId,
            String ii_usUsuario,
            String ii_uspassword) {
        this.ii_usIdCliente = ii_usIdCliente;
        this.ii_usId = ii_usId;
        this.ii_usUsuario = ii_usUsuario;
        this.ii_uspassword = ii_uspassword;
    }

    public int getIi_usIdCliente() {
        return ii_usIdCliente;
    }

    public void setIi_usIdCliente(int ii_usIdCliente) {
        this.ii_usIdCliente = ii_usIdCliente;
    }

    public int getIi_usId() {
        return ii_usId;
    }

    public void setIi_usId(int ii_usId) {
        this.ii_usId = ii_usId;
    }

    public String getIi_usUsuario() {
        return ii_usUsuario;
    }

    public void setIi_usUsuario(String ii_usUsuario) {
        this.ii_usUsuario = ii_usUsuario;
    }

    public String getIi_uspassword() {
        return ii_uspassword;
    }

    public void setIi_uspassword(String ii_uspassword) {
        this.ii_uspassword = ii_uspassword;
    }
}
