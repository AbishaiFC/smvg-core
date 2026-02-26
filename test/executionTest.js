import { SystemCore } from "../src/systemCore.js";
import { MemoryStorage } from "../storage/memoryStorage.js";

const storage = new MemoryStorage();
const core = new SystemCore(storage);

core.registerExecution("Test execution");

console.log(core.accumulate());
