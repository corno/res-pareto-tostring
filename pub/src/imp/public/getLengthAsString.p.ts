
import * as api from "api-pareto-tostring"

import { getLengthAsStringImp } from "../private/getLengthAsStringImp.p"

export const getLengthAsString: api.FGetArrayLengthAsString = ($) => {
   return getLengthAsStringImp($)

}