


import { A } from "../api.generated"

export const $$: A. getNumberOfKeysAsString = ($) => {
   let count = 0
   $.map(($) => {
       count += 1
   })
   return `${count}`
}