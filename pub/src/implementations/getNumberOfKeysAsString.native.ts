
import * as mapi from "../api"

export const $$: mapi.CgetNumberOfKeysAsString = ($) => {
   let count = 0
   $.map(($) => {
       count += 1
   })
   return `${count}`
}