/**
 * SMVG - Sistema de Modelado de Vida Gamificado
 *
 * @author AbishaiFC
 * @version 1.0.0
 */

let executions = [];

function registerExecution(description) {
  /**
   * Registra una Execution en el Array executions
   *
   * @param {string} description - Descripción de la ejecución.
   * @returns {void}
   */
  const execution = {
    id: executions.length + 1,
    description,
    timestamp: new Date().toISOString(),
  };

  executions.push(execution);
}

function accumulate() {
  /**
   * Devuelve todas las Executions registradas.
   */
  return executions;
}

function frecuencyMetric() {
  /**
   * Devuelve la frecuencia acumulativa por unidad temporal (día).
   *
   * @returns {object} - Objeto con la frecuencia acumulativa por día.
   */
  const frecuency = {};

  executions.forEach((execution) => {
    const date = execution.timestamp.split("T")[0];

    if (!frecuency[date]) {
      frecuency[date] = 0;
    }

    frecuency[date]++;
  });

  return frecuency;
}

registerExecution("Leer 10 páginas de un libro");
registerExecution("Entrenar 30 minutos");
registerExecution("Estudiar 1 hora");
registerExecution("Meditar 10 minutos");
registerExecution("Preparar comida saludable");
registerExecution("Limpiar mi habitación");
registerExecution("Leer 10 páginas de un libro");
registerExecution("Hacer 10 flexiones");
registerExecution("Beber 2 litros de agua");

console.log(accumulate());
console.log(frecuencyMetric());
