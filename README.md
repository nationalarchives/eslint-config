<img src="./src/nationalarchives/assets/images/tna-square-logo.svg" alt="The National Archives logo" title="The National Archives" width="100" />

# The National Archives ESLint config

[![Latest release](https://img.shields.io/github/v/release/nationalarchives/eslint-config?style=flat-square&logo=github&logoColor=white&sort=semver)](https://github.com/nationalarchives/eslint-config/releases)
[![NPM version](https://img.shields.io/npm/v/@nationalarchives/eslint-config?style=flat-square&logo=npm&logoColor=white)](https://www.npmjs.com/package/@nationalarchives/eslint-config)
[![Licence](https://img.shields.io/github/license/nationalarchives/eslint-config?style=flat-square)](https://github.com/nationalarchives/eslint-config/blob/main/LICENCE)

```bash
npm install -D @nationalarchives/eslint-config
```

## `eslint.config.js`

```js
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    extends: ["@nationalarchives/eslint-config"],
  },
]);
```
