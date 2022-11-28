import * as pt from "pareto-core-types"

import * as api from "../../interface"
import { getArrayAsStringImp } from "../private/getArrayAsStringImp.p"

export const f_getArrayAsString: api.FGetArrayAsString = ($) => {
  return getArrayAsStringImp($)
}