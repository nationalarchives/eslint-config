import { fileURLToPath } from "node:url";

import eslint from "@eslint/js";
import { defineConfig, globalIgnores, includeIgnoreFile } from "eslint/config";
import { importX } from "eslint-plugin-import-x";
import pluginPromise from "eslint-plugin-promise";
import globals from "globals";

const gitignorePath = fileURLToPath(new URL(".gitignore", import.meta.url));

export default defineConfig([
  {
    files: ["**/*.{cjs,js,mjs}"],
    extends: [
      eslint.configs.all,
      eslint.configs.recommended,
      pluginPromise.configs["flat/recommended"],
      importX.configs["flat/recommended"],
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
      "import-x": importX,
    },
    rules: {
      "import-x/order": [
        "error",
        {
          alphabetize: { order: "asc" },
          "newlines-between": "always",
        },
      ],
      "capitalized-comments": "off",
      "no-magic-numbers": "warn",
      "no-new": "warn",
      "no-ternary": "warn",
      "one-var": "off",
      "prefer-named-capture-group": "off",
      "require-unicode-regexp": "off",
      "sort-imports": ["error", { ignoreDeclarationSort: true }],
      "sort-keys": "off",
      "sort-vars": "warn",
    },
  },
  includeIgnoreFile(gitignorePath, { gitignoreResolution: true }),
  globalIgnores([
    "**/*.min.js",
    "**/*.config.js",
    "**/.cache/**",
    "**/node_modules/",
  ]),
]);
