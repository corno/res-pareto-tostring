
import * as api from "../api"

export const $$: api.CgetKeysAsString = ($) => {
   const foundKeys: string[] = []
   $.dictionary.map(($, key) => {
      foundKeys.push(key)
   })

   const formatted = foundKeys.map($ => `'${$}'`)
   if ($.maximum[0] === true) {
      const maxAmount = $.maximum[1].maximum
      if (foundKeys.length > maxAmount) {
         formatted.splice(maxAmount)
         formatted.push($.maximum[1].suffix)
     }
   }
   return `${foundKeys.join($.separator === null ? "": $.separator)}`
}