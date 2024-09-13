import { Impuestos } from './Impuestos.js';

export class Cliente {
  constructor(nombre, impuesto) {
    this._nombre = nombre;
    this._impuesto = impuesto; // Debe ser una instancia de la clase Impuestos
  }

  // Getters
  get nombre() {
    return this._nombre;
  }

  // Setters
  set nombre(nuevoNombre) {
    this._nombre = nuevoNombre;
  }

  // Método para calcular el impuesto
  calcularImpuesto() {
    const montoBruto = this._impuesto.montoBrutoAnual;
    const deducciones = this._impuesto.deducciones;
    const impuestoTotal = (montoBruto - deducciones) * 0.21;
    return impuestoTotal;
  }
}