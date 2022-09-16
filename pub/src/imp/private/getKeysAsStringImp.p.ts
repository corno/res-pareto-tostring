
import * as api from "api-pareto-tostring"

export const getKeysAsStringImp: api.FGetKeysAsString = (
   $
 ) => {
    const maxAmount = 10
    const foundKeys: string[] = []
    $.dictionary.map(($, key) => {
       foundKeys.push(key)
    })

    const formatted = foundKeys.map($ => `'${$}'`)
    if (foundKeys.length > maxAmount) {
        formatted.splice(maxAmount)
        formatted.push("...")
    }
    return `${foundKeys.join($.separator === null ? "": $.separator)}`
}