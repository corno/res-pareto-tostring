
import * as api from "../api"

export const $$: api.CgetLengthAsString = ($) => {
   return `${$.__getLength()}`
}