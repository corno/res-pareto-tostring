import * as pt from "pareto-core-types"

import * as api from "api-pareto-tostring"

export const getArrayAsStringImp: api.FGetArrayAsString = (
    $
) => {
    const tmp: string[] = []
    $.array.forEach(($) => {
        tmp.push($)
    })
    return tmp.join($.separator === null ? "": $.separator)
}