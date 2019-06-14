"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dtsgenerator_1 = require("dtsgenerator");
const jsyaml = require("js-yaml");
async function gen(schema) {
    if (typeof schema === "string")
        schema = jsyaml.safeLoad(schema);
    const code = await dtsgenerator_1.default({ contents: [schema], namespaceName: "" });
    return code.replace(/^declare\b/gm, "export");
}
exports.gen = gen;
