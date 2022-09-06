import * as pt from "pareto-core-types"

import * as api from "api-pareto-tostring"
import { getArrayAsStringImp } from "../private/getArrayAsStringImp"

export const getArrayAsString: api.FGetArrayAsString = (
    $
) => {
  return getArrayAsStringImp($)
}