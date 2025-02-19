export default class CL_mOficina {
    constructor(montoDisponible, porcIncremento) {
        this.montoDisponible = montoDisponible;
        this.porcIncremento = porcIncremento;
        this.acPrestamo = 0;
        this.cntCli2Mes = 0;
        this.cliMenor = Infinity;
        this.nomCliMenor = "";
    }

    procesarPrestamo(p) {
        this.acPrestamo += p.monto;
        if (p.cantidad == 2) {
            this.cntCli2Mes++;
        }
        if (p.monto < this.cliMenor) {
            this.cliMenor = p.monto;
            this.nomCliMenor = p.nombre;
        }
    }

    montoFinal() {
        return this.montoDisponible - this.acPrestamo;
    }
    cntCliente2Mes() {
        return this.cntCli2Mes;
    }
    cliMenPrestamo() {
        return this.nomCliMenor;
    }
}