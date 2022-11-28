import * as pt from "pareto-core-types"

import * as api from "../../interface"

export const getArrayAsStringImp: api.FGetArrayAsString = (
    $
) => {
    const tmp: string[] = []
    $.array.forEach(($) => {
        tmp.push($)
    })
    return tmp.join($.separator === null ? "": $.separator)
}