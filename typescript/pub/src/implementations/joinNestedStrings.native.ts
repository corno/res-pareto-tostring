import * as pi from 'pareto-core-internals'



import { post } from "../native/post.native"

import { joinNestedStrings } from "../api.generated"

export const $$: joinNestedStrings = ($c) => {
    return ($) => {
        return post(pi.flatten($), $c)
    }
}