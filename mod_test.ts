import { assert } from "https://deno.land/std@0.68.0/testing/asserts.ts";

import isRunning from "./mod.ts";

Deno.test("current pid is running", (): void => {
  assert(isRunning(Deno.pid));
});
