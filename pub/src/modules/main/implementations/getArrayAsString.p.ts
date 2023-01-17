import * as pt from 'pareto-core-types'

import * as api from "../api"

export const $$: api.CgetArrayAsString = ($) => {
  const tmp: string[] = []
  $.array.forEach(($) => {
      tmp.push($)
  })
  return tmp.join($.separator === null ? "": $.separator)
}