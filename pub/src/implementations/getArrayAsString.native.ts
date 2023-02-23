
import * as mapi from "../api"
import { post } from '../native/post.native'

export const $$: mapi.CgetArrayAsString = ($c, $d) => {
  return ($) => {
    const tmp: string[] = []
    $.__forEach(($) => {
      tmp.push($)
    })
    return post(tmp, $c)
  }
}