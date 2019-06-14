#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gen_1 = require("./gen");
process.stdin.setEncoding("utf8");
process.stdin.resume();
let processed = false;
let stdinData = "";
async function onEnd() {
    if (processed)
        return;
    processed = true;
    // tslint:disable-next-line no-console
    console.log(await gen_1.gen(stdinData));
}
process.stdin.on("data", function (chunk) {
    stdinData += chunk;
});
process.stdin.on("close", onEnd);
process.stdin.on("end", onEnd);
