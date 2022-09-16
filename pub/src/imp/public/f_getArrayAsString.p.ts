import * as pt from "pareto-core-types"

import * as api from "api-pareto-tostring"
import { getArrayAsStringImp } from "../private/f_getArrayAsStringImp"

export const f_getArrayAsString: api.FGetArrayAsString = (
    $
) => {
  return getArrayAsStringImp($)
}