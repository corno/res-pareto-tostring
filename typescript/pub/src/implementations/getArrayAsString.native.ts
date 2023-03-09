

import { post } from '../native/post.native'

import {getArrayAsString } from "../api.generated"

export const $$: getArrayAsString = ($c) => {
  return ($) => {
    const tmp: string[] = []
    $.__forEach(($) => {
      tmp.push($)
    })
    return post(tmp, $c)
  }
}