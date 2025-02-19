export default class CL_vPrestamo {
    constructor() {
        this.vista = document.getElementById("prestamoForm");
        this.inNombre = document.getElementById("prestamoForm_inNombre");
        this.inCodigo = document.getElementById("prestamoForm_inCodigo");
        this.inMonto = document.getElementById("prestamoForm_inMonto");
        this.inCantidad = document.getElementById("prestamoForm_inCantidad");
        this.btAceptar = document.getElementById("prestamoForm_btAceptar");
    }
    get nombre() {
        return this.inNombre.value;
    }
    get codigo() {
        return +this.inCodigo.value;
    }
    get monto() {
        return +this.inMonto.value;
    }
    get cantidad() {
        return +this.inCantidad.value;
    }
    mostrar() {
        this.vista.hidden = false;
    }
    ocultar() {
        this.vista.hidden = true;
    }
}
