
import * as api from "../api"
import { post } from "../native/post.native"

export const $$: api.CgetKeysAsString = ($c) => {
   return ($) => {
      const foundKeys: string[] = []
      $.__mapWithKey(($, key) => {
         foundKeys.push(key)
      })

      return post(foundKeys, $c)
   }
}