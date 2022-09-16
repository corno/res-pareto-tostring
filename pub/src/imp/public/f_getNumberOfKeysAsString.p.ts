
import * as api from "api-pareto-tostring"
import { getNumberOfKeysAsStringImp } from "../private/f_getNumberOfKeysAsStringImp"

export const f_getNumberOfKeysAsString: api.FGetNumberOfKeysAsString = (
    $
) => {
   return getNumberOfKeysAsStringImp($)
}