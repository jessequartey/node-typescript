import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";
import "dotenv/config";

export const env = createEnv({
  server: {
    TEST: z.string(),
  },
  runtimeEnvStrict: {
    TEST: process.env.TEST,
  },
});
