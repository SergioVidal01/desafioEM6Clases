import { Cliente } from './Cliente.js';
import { Impuestos } from './Impuestos.js';

// Crear una instancia de Impuestos
const impuestosCliente = new Impuestos(50000, 10000);

// Crear una instancia de Cliente y pasarle la instancia de Impuestos
const cliente = new Cliente('Juan', impuestosCliente);

// Mostrar el nombre del cliente
console.log(`Cliente: ${cliente.nombre}`);

// Calcular y mostrar el impuesto total a pagar
console.log(`Impuesto Total a pagar: ${cliente.calcularImpuesto()}`);