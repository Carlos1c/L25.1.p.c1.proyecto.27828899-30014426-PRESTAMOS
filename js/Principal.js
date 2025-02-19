/* Se desea llevar un control de los préstamos que
realiza una oficina. Se tiene por cada préstamo: nombre
del cliente, código del préstamo, monto y cantidad de
meses. Se requiere de un programa que permita el
registro de esta información, conociendo al principio de
la ejecución el monto disponible para préstamos y el
porcentaje de comisión mensual que se cobrará.
Datos de inicialización para Cl_oficina
montoDisponible: 20000.00,
porcComisionMensual: 5.00
Préstamos de prueba
cliente:'Luis'      cliente:'Carla'     cliente:'Mery'
codigo:  1111       codigo:  2222       codigo:  3333
prestamo:1000       prestamo: 500       prestamo:2000
meses:    3         meses:     2        meses:    5   */

import CL_vOficina from "./CL_vOficina.js";
import CL_mOficina from "./CL_mOficina.js";
import CL_controlador from "./CL_controlador.js";

export default class Cl_Principal {
    constructor() {
        let montoDisponible = prompt(`Indeque el monto disponible para préstamos`);
        let porcIncremento = prompt(`Indique el porcentaje de comisión mensual que se cobrará`);
        let vista = new CL_vOficina();
        let modelo = new CL_mOficina(montoDisponible, porcIncremento);
        let controlador = new CL_controlador(modelo, vista);
        vista.controlador = controlador;
    }
}