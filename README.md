# The National Archives ESLint config

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
