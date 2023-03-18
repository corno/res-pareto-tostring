

import { post } from "../native/post.native"

import { A } from "../api.generated"

export const $$: A. getArrayAsString = ($c) => {
  return ($) => {
    const tmp: string[] = []
    $.__forEach(($) => {
      tmp.push($)
    })
    return post(tmp, $c)
  }
}