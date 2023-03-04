

import { post } from '../native/post.native'

import {getArrayAsString } from "../definition/api.generated"

export const $$: getArrayAsString = ($c, $d) => {
  return ($) => {
    const tmp: string[] = []
    $.__forEach(($) => {
      tmp.push($)
    })
    return post(tmp, $c)
  }
}