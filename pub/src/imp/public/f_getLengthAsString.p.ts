
 import * as api from "api-pareto-tostring"
import { getLengthAsStringImp } from "../private/f_getLengthAsStringImp"

export const f_getLengthAsString: api.FGetArrayLengthAsString = ($) => {
   return getLengthAsStringImp($)

}