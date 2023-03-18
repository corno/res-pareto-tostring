import * as pi from 'pareto-core-internals'



import { post } from "../native/post.native"

import { A } from "../api.generated"

export const $$: A. joinNestedStrings = ($c) => {
    return ($) => {
        return post(pi.flatten($), $c)
    }
}