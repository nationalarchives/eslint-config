import { defineConfig, globalIgnores } from "eslint/config";
import pluginPromise from "eslint-plugin-promise";
import globals from "globals";
import eslint from "@eslint/js";
import { importX as pluginImportX } from "eslint-plugin-import-x";

export default defineConfig([
  {
    files: ["**/*.{cjs,js,mjs}"],
    extends: [
      eslint.configs.all,
      eslint.configs.recommended,
      pluginPromise.configs["flat/recommended"],
    ],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        ecmaVersion: "latest",
      },
    },
    plugins: {
      "import-x": pluginImportX,
    },
    rules: {
      // Check import or require statements are A-Z ordered
      "import-x/order": [
        "error",
        {
          alphabetize: { order: "asc" },
          "newlines-between": "always",
        },
      ],
    },
  },
  globalIgnores(["**/.cache/**", "!.*", "node_modules", "node_modules/.*"]),
]);
