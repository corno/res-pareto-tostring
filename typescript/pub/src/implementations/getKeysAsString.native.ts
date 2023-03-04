

import { post } from "../native/post.native"

import {getKeysAsString } from "../definition/api.generated"

export const $$: getKeysAsString = ($c) => {
   return ($) => {
      const foundKeys: string[] = []
      $.__mapWithKey(($, key) => {
         foundKeys.push(key)
      })

      return post(foundKeys, $c)
   }
}