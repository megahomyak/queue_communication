import * as common from "./common.mjs";

let { send, listen } = common.getParent();

await listen(common.map([
    ["register callback", common.str2str()],
]));
