export class MemoryStorage {
  constructor() {
    this.data = [];
  }

  load() {
    return this.data;
  }

  save(data) {
    this.data = data;
  }
}
