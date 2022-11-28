
import * as api from "../../interface"

import { getKeysAsStringImp } from "../private/getKeysAsStringImp.p"

export const getKeysAsString: api.FGetKeysAsString = ($) => {
   return getKeysAsStringImp($)
}