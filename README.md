# The National Archives ESLint config

```bash
# Install ESLint and all the required dependencies
npm install -D eslint @eslint/eslintrc eslint/js globals

# Install the National Archives ESLint config
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
