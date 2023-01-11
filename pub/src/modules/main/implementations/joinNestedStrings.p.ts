import * as pi from "pareto-core-internals"

import * as api from "../api"

export const ijoinNestedStrings: api.CjoinNestedStrings = ($) => {
    return pi.flatten($.strings).join($.separator === null ? "": $.separator)
}