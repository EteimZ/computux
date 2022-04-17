#!/usr/bin/env node

const util = require("./utils");
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(`Input year: `, (year) => {
  let easter = util.computus(year);
  console.log(
    `Easter is on the ${
      easter.o + 1 + util.nth(easter.o)
    } of ${util.switchDateToString(easter.n)}.`
  );
  readline.close();
});
