import type { RemixConfig } from "../config";
import { warnOnce } from "../warnOnce";
import type { CompileOptions } from "./options";
import * as Compiler from "./compiler";

export async function build(
  config: RemixConfig,
  {
    mode = "production",
    target = "node14",
    sourcemap = false,
    onWarning = warnOnce,
  }: Partial<CompileOptions> = {}
) {
  let compiler = await Compiler.create(config, {
    mode,
    target,
    sourcemap,
    onWarning,
  });
  return compiler.compile();
}
