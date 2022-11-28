
 import * as api from "../../interface"

export const getLengthAsStringImp: api.FGetArrayLengthAsString = ($) => {
    let count = 0
    $.forEach(() => {
        count += 1
    })
    return `${count}`

}