


import {getNumberOfKeysAsString } from "../definition/api.generated"

export const $$: getNumberOfKeysAsString = ($) => {
   let count = 0
   $.map(($) => {
       count += 1
   })
   return `${count}`
}