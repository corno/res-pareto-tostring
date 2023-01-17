import * as pi from "pareto-core-internals"

import * as api from "../api"

export const $$: api.CjoinNestedStrings = ($) => {
    return pi.flatten($.strings).join($.separator === null ? "": $.separator)
}