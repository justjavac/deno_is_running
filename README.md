# deno_is_running

[![tag](https://img.shields.io/github/release/justjavac/deno_is_running)](https://github.com/justjavac/deno_is_running/releases)
[![Build Status](https://github.com/justjavac/deno_is_running/workflows/ci/badge.svg?branch=master)](https://github.com/justjavac/deno_is_running/actions)
[![license](https://img.shields.io/github/license/justjavac/deno_is_running)](https://github.com/justjavac/deno_is_running/blob/master/LICENSE)

Return `true` if the given PID is running.

## Usage

```ts
import isRunning from "https://deno.land/x/is_running/mod.ts";

isRunning(Deno.pid);  // true
isRunning(13232);
```

## Example

```bash
deno run --allow-run --unstable https://deno.land/x/is_running/example.ts
```

## License

[deno_is_running](https://github.com/justjavac/deno_is_running) is released under the MIT License. See the bundled [LICENSE](./LICENSE) file for details.
