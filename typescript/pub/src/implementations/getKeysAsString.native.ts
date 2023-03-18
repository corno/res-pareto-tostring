

import { post } from "../native/post.native"

import { A } from "../api.generated"

export const $$: A. getKeysAsString = ($c) => {
   return ($) => {
      const foundKeys: string[] = []
      $.__mapWithKey(($, key) => {
         foundKeys.push(key)
      })

      return post(foundKeys, $c)
   }
}