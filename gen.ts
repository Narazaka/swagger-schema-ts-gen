import dtsGenerator from "dtsgenerator";
import * as jsyaml from "js-yaml";

export async function gen(schema: string | object) {
    if (typeof schema === "string") schema = jsyaml.safeLoad(schema);
    const code = await dtsGenerator({contents: [schema], namespaceName: ""});
    return code.replace(/^declare\b/gm, "export");
}
