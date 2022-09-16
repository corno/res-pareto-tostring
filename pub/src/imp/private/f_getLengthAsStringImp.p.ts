
 import * as api from "api-pareto-tostring"

export const getLengthAsStringImp: api.FGetArrayLengthAsString = ($) => {
    let count = 0
    $.forEach(() => {
        count += 1
    })
    return `${count}`

}