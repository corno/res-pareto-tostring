

import { post } from '../native/post.native'

import { CgetArrayAsString } from "../definition/api.generated"

export const $$:CgetArrayAsString = ($c, $d) => {
  return ($) => {
    const tmp: string[] = []
    $.__forEach(($) => {
      tmp.push($)
    })
    return post(tmp, $c)
  }
}