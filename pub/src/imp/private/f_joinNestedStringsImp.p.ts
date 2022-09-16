import * as pi from "pareto-core-internals"

import * as api from "api-pareto-tostring"

export const f_joinNestedStringsImp: api.FJoinNestedString = (
    $
) => {
    return pi.flatten($.strings).join($.separator)
}