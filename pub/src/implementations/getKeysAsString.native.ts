

import { post } from "../native/post.native"

import { CgetKeysAsString } from "../api"

export const $$:CgetKeysAsString = ($c) => {
   return ($) => {
      const foundKeys: string[] = []
      $.__mapWithKey(($, key) => {
         foundKeys.push(key)
      })

      return post(foundKeys, $c)
   }
}