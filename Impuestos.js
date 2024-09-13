export class Impuestos {
    constructor(montoBrutoAnual, deducciones) {
      this._montoBrutoAnual = montoBrutoAnual;
      this._deducciones = deducciones;
    }
  
    // Getters
    get montoBrutoAnual() {
      return this._montoBrutoAnual;
    }
  
    get deducciones() {
      return this._deducciones;
    }
  
    // Setters
    set montoBrutoAnual(valor) {
      this._montoBrutoAnual = valor;
    }
  
    set deducciones(valor) {
      this._deducciones = valor;
    }
  }