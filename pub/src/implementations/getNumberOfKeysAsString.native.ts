
import * as api from "../api"

export const $$: api.CgetNumberOfKeysAsString = ($) => {
   let count = 0
   $.map(($) => {
       count += 1
   })
   return `${count}`
}