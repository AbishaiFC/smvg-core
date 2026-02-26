#!/usr/bin/env node
/**
 * CLI para el sistema de modelado de vida gamificado
 */
import { SystemCore } from "../src/systemCore.js";
import { FileStorage } from "../storage/fileStorage.js";

const storage = new FileStorage("executions.json");
const core = new SystemCore(storage);

const command = process.argv[2];
const argument = process.argv.slice(3).join(" ");

switch (command) {
  case "register":
    if (!argument) {
      console.log("Debes proporcionar una descripción");
      process.exit(1);
    }
    core.registerExecution(argument);
    console.log("Ejecución registrada");

    break;
  case "list":
    console.log(core.accumulate());
    break;
  case "frequency":
    console.log(core.frecuencyMetric());
    break;
  default:
    console.log(`
SMVG CLI

Comandos disponibles:

register "descripcion"   → Registrar ejecución
list                     → Mostrar ejecuciones
frequency                → Métrica de frecuencia diaria
    `);
}
