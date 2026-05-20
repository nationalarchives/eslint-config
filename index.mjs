import eslint from "@eslint/js";
import { defineConfig, globalIgnores } from "eslint/config";
import { importX as pluginImportX } from "eslint-plugin-import-x";
import pluginPromise from "eslint-plugin-promise";
import globals from "globals";

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
      "import-x/order": [
        "error",
        {
          alphabetize: { order: "asc" },
          "newlines-between": "always",
        },
      ],
      "sort-imports": ["error", { ignoreDeclarationSort: true }],
      "sort-keys": ["off"],
    },
  },
  globalIgnores(["**/.cache/**", "!.*", "node_modules", "node_modules/.*"]),
]);
