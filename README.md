<img src="https://raw.githubusercontent.com/nationalarchives/tna-frontend/main/src/nationalarchives/assets/images/tna-square-logo.svg" alt="The National Archives logo" title="The National Archives" width="100" />

# The National Archives ESLint config

[![Latest release](https://img.shields.io/github/v/release/nationalarchives/eslint-config?style=flat-square&logo=github&logoColor=white&sort=semver)](https://github.com/nationalarchives/eslint-config/releases)
[![NPM version](https://img.shields.io/npm/v/@nationalarchives/eslint-config?style=flat-square&logo=npm&logoColor=white)](https://www.npmjs.com/package/@nationalarchives/eslint-config)
[![Licence](https://img.shields.io/github/license/nationalarchives/eslint-config?style=flat-square)](https://github.com/nationalarchives/eslint-config/blob/main/LICENCE)

```bash
npm install -D @nationalarchives/eslint-config
```

## `eslint.config.mjs`

```js
import { defineConfig } from "eslint/config";
import tnaEslintConfig from "@nationalarchives/eslint-config";

export default defineConfig([...tnaEslintConfig]);
```

## Dependencies and plugins

- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
- [eslint-plugin-import-x](https://github.com/un-ts/eslint-plugin-import-x)
- [eslint-plugin-promise](https://github.com/eslint-community/eslint-plugin-promise)
