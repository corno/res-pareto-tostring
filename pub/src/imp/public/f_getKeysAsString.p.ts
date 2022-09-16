
import * as api from "api-pareto-tostring"
import { getKeysAsStringImp } from "../private/f_getKeysAsStringImp"

export const f_getKeysAsString: api.FGetKeysAsString = (
   $
 ) => {
    return getKeysAsStringImp($)
}