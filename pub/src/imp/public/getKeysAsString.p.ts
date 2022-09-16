
import * as api from "api-pareto-tostring"

import { getKeysAsStringImp } from "../private/getKeysAsStringImp.p"

export const getKeysAsString: api.FGetKeysAsString = ($) => {
   return getKeysAsStringImp($)
}