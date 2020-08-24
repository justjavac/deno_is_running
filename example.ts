import isRunning from "./mod.ts";

console.log(`is pid ${Deno.pid} running: ${isRunning(Deno.pid)}`);
