import * as pi from 'pareto-core-internals'



import { post } from "../native/post.native"

import { CjoinNestedStrings } from "../definition/api.generated"

export const $$:CjoinNestedStrings = ($c) => {
    return ($) => {
        return post(pi.flatten($), $c)
    }
}