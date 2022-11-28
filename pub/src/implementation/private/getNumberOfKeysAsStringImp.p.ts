
import * as api from "../../interface"

export const getNumberOfKeysAsStringImp: api.FGetNumberOfKeysAsString = (
    $
) => {
    let count = 0
    $.map(($, key) => {
        count += 1
    })
    return `${count}`
}