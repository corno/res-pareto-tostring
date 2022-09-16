
import * as api from "api-pareto-tostring"

import { getNumberOfKeysAsStringImp } from "../private/getNumberOfKeysAsStringImp.p"

export const f_getNumberOfKeysAsString: api.FGetNumberOfKeysAsString = ($) => {
   return getNumberOfKeysAsStringImp($)
}