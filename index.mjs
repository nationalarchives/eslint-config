import eslint from "@eslint/js";
import { defineConfig, globalIgnores } from "eslint/config";
import { importX } from "eslint-plugin-import-x";
import noSecrets from "eslint-plugin-no-secrets";
import pluginPromise from "eslint-plugin-promise";
import globals from "globals";

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
      "no-secrets": noSecrets,
    },
    rules: {
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

      "import-x/order": [
        "error",
        {
          alphabetize: { order: "asc" },
          "newlines-between": "always",
        },
      ],

      "no-secrets/no-secrets": "error",
    },
  },
  globalIgnores([
    "**/*.min.js",
    "**/*.map.js",
    "**/*.config.js",
    "**/.cache/**",
    "**/node_modules/",
  ]),
]);
