
import * as api from "../api"

export const $$: api.CgetKeysAsString = ($) => {
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