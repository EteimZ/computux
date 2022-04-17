#!/usr/bin/env node

const util = require("./utils");
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(`Input year: `, (name) => {
  let easter = util.computus(name);
  console.log(
    `Easter is on the ${
      easter.o + util.nth(easter.o)
    } of ${util.switchDateToString(easter.n)}.`
  );
  readline.close();
});
