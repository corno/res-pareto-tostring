import * as pt from 'pareto-core-types'

import * as api from "../api"
import { post } from '../native/post.native'

export const $$: api.CgetArrayAsString = ($c, $d) => {
  return ($) => {
    const tmp: string[] = []
    $.__forEach(($) => {
      tmp.push($)
    })
    return post(tmp, $c)
  }
}