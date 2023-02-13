
import * as api from "../api"

export const $$: api.CgetLengthAsString = ($) => {
   let count = 0
   $.forEach(() => {
       count += 1
   })
   return `${count}`
}