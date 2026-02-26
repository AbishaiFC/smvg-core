/**
 * SMVG - Sistema de Modelado de Vida Gamificado
 *
 * @author AbishaiFC
 * @version 1.2.0
 */
export class SystemCore {
  /**
   * Constructor de la clase SystemCore
   *
   * Encapsula la lógica de registro, acumulación y métricas.
   */
  constructor(storage) {
    this.storage = storage;
    this.executions = this.storage.load();
  }

  registerExecution(description) {
    /**
     * Registra una Execution en el Array executions
     *
     * @param {string} description - Descripción de la ejecución.
     * @returns {void}
     */
    const execution = {
      id: this.executions.length + 1,
      description,
      timestamp: new Date().toISOString(),
    };

    this.executions.push(execution);
    this.storage.save(this.executions);
  }

  accumulate() {
    /**
     * Devuelve todas las Executions registradas.
     */
    return this.executions;
  }

  frecuencyMetric() {
    /**
     * Devuelve la frecuencia acumulativa por unidad temporal (día).
     *
     * @returns {object} - Objeto con la frecuencia acumulativa por día.
     */
    const frecuency = {};

    this.executions.forEach((execution) => {
      const date = execution.timestamp.split("T")[0];

      if (!frecuency[date]) {
        frecuency[date] = 0;
      }

      frecuency[date]++;
    });

    return frecuency;
  }
}
