import * as pi from "pareto-core-internals"

import * as api from "api-pareto-tostring"

export const joinNestedStringsImp: api.FJoinNestedString = (
    $
) => {
    return pi.flatten($.strings).join($.separator === null ? "": $.separator)
}