import * as pi from 'pareto-core-internals'



import { post } from "../native/post.native"

import { CjoinNestedStrings } from "../api"

export const $$:CjoinNestedStrings = ($c) => {
    return ($) => {
        return post(pi.flatten($), $c)
    }
}