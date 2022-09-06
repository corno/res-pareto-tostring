
import * as api from "api-pareto-tostring"
import { getKeysAsStringImp } from "../private/getKeysAsStringImp"

export const getKeysAsString: api.FGetKeysAsString = (
   $
 ) => {
    return getKeysAsStringImp($)
}