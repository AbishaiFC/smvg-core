/**
 * Módulo encargado del manejo de archivos
 */
import fs from "fs";

export class FileStorage {
  /**
   * Constructor de la clase FileStorage
   * @param {string} filename - Nombre del archivo
   */
  constructor(filename) {
    this.filename = filename;
  }

  /**
   * Carga los datos del archivo
   * @returns {Array} - Array de datos
   */
  load() {
    if (fs.existsSync(this.filename)) {
      return JSON.parse(fs.readFileSync(this.filename, "utf-8"));
    }

    return [];
  }

  /**
   * Guarda los datos en el archivo
   * @param {Array} data - Datos a guardar
   */
  save(data) {
    fs.writeFileSync(this.filename, JSON.stringify(data, null, 2));
  }
}
