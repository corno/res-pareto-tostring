


import { CgetNumberOfKeysAsString } from "../api"

export const $$:CgetNumberOfKeysAsString = ($) => {
   let count = 0
   $.map(($) => {
       count += 1
   })
   return `${count}`
}