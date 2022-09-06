
import * as api from "api-pareto-tostring"
import { getNumberOfKeysAsStringImp } from "../private/getNumberOfKeysAsStringImp"

export const getNumberOfKeysAsString: api.FGetNumberOfKeysAsString = (
    $
) => {
   return getNumberOfKeysAsStringImp($)
}