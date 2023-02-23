
import * as mapi from "../api"

export const $$: mapi.CgetLengthAsString = ($) => {
   return `${$.__getLength()}`
}