
import * as api from "api-pareto-tostring"

export const getNumberOfKeysAsStringImp: api.FGetNumberOfKeysAsString = (
    $
) => {
    let count = 0
    $.map(($, key) => {
        count += 1
    })
    return `${count}`
}