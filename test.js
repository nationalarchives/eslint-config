/* eslint-disable no-console */

import { readdir } from "node:fs/promises";
import { join } from "node:path";

import { ESLint } from "eslint";

const eslint = new ESLint({ overrideConfigFile: "index.mjs" });

const files = await readdir("tests", { recursive: true });
const testFiles = files
  .filter((file) => file.endsWith(".js"))
  .map((file) => join("tests", file));

let failed = false;

const allResults = await Promise.all(
  testFiles.map((file) => eslint.lintFiles(file)),
);

for (const [index, file] of testFiles.entries()) {
  const results = allResults[index];
  const errors = results.flatMap((result) =>
    /* eslint-disable-next-line no-magic-numbers */
    result.messages.filter((message) => message.severity === 2),
  );
  /* eslint-disable-next-line no-magic-numbers */
  if (errors.length > 0) {
    console.log(
      "\x1b[42m%s\x1b[0m",
      " PASS ",
      "\x1b[0m",
      `${file} (${errors.length} error(s) raised)`,
    );
    for (const error of errors) {
      console.log(
        `        ${error.line}:${error.column} ${error.message} (${error.ruleId})`,
      );
    }
  } else {
    failed = true;
    console.error(
      "\x1b[41m%s\x1b[0m",
      " FAIL ",
      "\x1b[0m",
      `${file} — expected errors but none were raised`,
    );
  }
  console.log();
}

if (failed) {
  /* eslint-disable-next-line no-magic-numbers, no-undef */
  process.exit(1);
}
