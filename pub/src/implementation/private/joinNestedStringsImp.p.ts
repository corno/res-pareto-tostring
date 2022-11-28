import * as pi from "pareto-core-internals"

import * as api from "../../interface"

export const joinNestedStringsImp: api.FJoinNestedString = (
    $
) => {
    return pi.flatten($.strings).join($.separator === null ? "": $.separator)
}