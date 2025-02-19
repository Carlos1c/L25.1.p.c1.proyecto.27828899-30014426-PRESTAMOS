export default class CL_mPrestamo {
    constructor({ nombre, codigo, monto, cantidad, montoDisponible, porcIncremento }) {
        this.nombre = nombre;
        this.codigo = codigo;
        this.monto = monto;
        this.cantidad = cantidad;
        this.montoDisponible = montoDisponible;
        this.porcIncremento = porcIncremento;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }
    get nombre() {
        return this._nombre;
    }

    set codigo(codigo) {
        this._codigo = +codigo;
    }
    get codigo() {
        return this._codigo;
    }

    set monto(monto) {
        this._monto = +monto;
    }
    get monto() {
        return this._monto;
    }

    set cantidad(cantidad) {
        this._cantidad = +cantidad;
    }
    get cantidad() {
        return this._cantidad;
    }

    set montoDisponible(montoDisponible) {
        this._montoDisponible = +montoDisponible;
    }
    get montoDisponible() {
        return this._montoDisponible;
    }

    set porcIncremento(porcIncremento) {
        this._porcIncremento = +porcIncremento;
    }
    get porcIncremento() {
        return this._porcIncremento;
    }
}