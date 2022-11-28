
import * as api from "../../interface"

import { getNumberOfKeysAsStringImp } from "../private/getNumberOfKeysAsStringImp.p"

export const f_getNumberOfKeysAsString: api.FGetNumberOfKeysAsString = ($) => {
   return getNumberOfKeysAsStringImp($)
}