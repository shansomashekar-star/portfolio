/**
 * ESLint 9 flat config. Replaces legacy .eslintrc.json.
 * See: https://eslint.org/docs/latest/use/configure/migration-guide
 */
import { defineConfig, globalIgnores } from "eslint/config";
import nextPlugin from "@next/eslint-plugin-next";

const eslintConfig = defineConfig([
  nextPlugin.configs.recommended,
  nextPlugin.configs["core-web-vitals"],
  // Override default ignores of eslint-config-next
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
