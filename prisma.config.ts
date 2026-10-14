import { config } from "dotenv";
import { defineConfig, env } from "prisma/config";

config({ path: ".env.local" });
config();

export default defineConfig({
  schema: "src/common/prisma/schema.prisma",
  migrations: {
    path: "src/common/prisma/migrations",
    seed: "tsx src/common/prisma/seed.ts",
  },
  datasource: {
    url: env("DB_URL"),
  },
});
