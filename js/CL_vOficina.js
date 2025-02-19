import CL_vPrestamo from "./CL_vPrestamo.js";
import CL_mPrestamo from "./CL_mPrestamo.js";
export default class CL_vOficina {
    constructor() {
        this.controlador = null;
        this.mPrestamo = null;
        this.vPrestamo = new CL_vPrestamo();
        this.vista = document.getElementById("mainForm");
        this.tabla = document.getElementById("mainForm_tabla");
        this.btAgregar = document.getElementById("mainForm_btAgregar");
        this.lblmontoFinal = document.getElementById("mainForm_lblmontoFinal");
        this.lblcntCliente2Mes = document.getElementById(
            "mainForm_lblcntCliente2Mes"
        );
        this.lblcliMenPrestamo = document.getElementById(
            "mainForm_lblcliMenPrestamo"
        );
        this.btAgregar.onclick = () => this.ocultar();
        this.vPrestamo.btAceptar.onclick = () => this.controlador.agregarPrestamo();
        this.mostrar();
    }

    agregarPrestamo() {
        this.mPrestamo = new CL_mPrestamo({
            nombre: this.vPrestamo.nombre,
            codigo: this.vPrestamo.codigo,
            monto: this.vPrestamo.monto,
            cantidad: this.vPrestamo.cantidad,
        });
        this.mostrar();
        return this.mPrestamo;
    }
    mostrar() {
        this.vista.hidden = false;
        this.vPrestamo.ocultar();
    }
    ocultar() {
        this.vista.hidden = true;
        this.vPrestamo.mostrar();
    }
    reportarPrestamo(montoFinal, cntCliente2Mes, cliMenPrestamo) {
        this.tabla.innerHTML += `
    <tr>
      <td>${this.mPrestamo.nombre}</td>
      <td>${this.mPrestamo.codigo}</td>
      <td>${this.mPrestamo.monto}</td>
      <td>${this.mPrestamo.cantidad}</td>
    </tr>`;
        this.lblmontoFinal.innerHTML = montoFinal;
        this.lblcntCliente2Mes.innerHTML = cntCliente2Mes;
        this.lblcliMenPrestamo.innerHTML = cliMenPrestamo;
    }
}