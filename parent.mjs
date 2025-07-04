import * as common from "./common.mjs";

let { send, listen } = common.invoke("node", ["child.mjs"]);

await send(common.makeRegisterCallback("addition", "add"));
await send(common.makeRegisterCallback("printing", "print"));
await send(common.makeCall("begin", common.));

await listen(common.map([
    ["functions", common.map(
        ["add", common.str2str(async string => {
            let [a, b] = string.split(/\s+/).filter(s => s);
            return (a + b).toString();
        })],
        ["print", common.str2str(async string => {
            console.log(string);
            return "";
        })],
    )],
]));
