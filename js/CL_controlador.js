export default class CL_controlador {
    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;
    }

    agregarPrestamo() {
        this.modelo.procesarPrestamo(this.vista.agregarPrestamo());
        this.vista.reportarPrestamo(
            this.modelo.montoFinal(),
            this.modelo.cntCliente2Mes(),
            this.modelo.cliMenPrestamo()
        );
    }
}  