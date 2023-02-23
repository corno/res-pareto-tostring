
import * as mapi from "../api"
import { post } from "../native/post.native"

export const $$: mapi.CgetKeysAsString = ($c) => {
   return ($) => {
      const foundKeys: string[] = []
      $.__mapWithKey(($, key) => {
         foundKeys.push(key)
      })

      return post(foundKeys, $c)
   }
}