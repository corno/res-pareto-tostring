
import * as api from "../../interface"

import { getLengthAsStringImp } from "../private/getLengthAsStringImp.p"

export const getLengthAsString: api.FGetArrayLengthAsString = ($) => {
   return getLengthAsStringImp($)

}