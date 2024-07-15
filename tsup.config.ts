import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["./src"],
  target: "node20",
  format: ["esm"],
  clean: true,
});
