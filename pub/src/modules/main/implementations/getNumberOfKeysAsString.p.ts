
import * as api from "../api"

export const igetNumberOfKeysAsString: api.CgetNumberOfKeysAsString = ($) => {
   let count = 0
   $.map(($, key) => {
       count += 1
   })
   return `${count}`
}