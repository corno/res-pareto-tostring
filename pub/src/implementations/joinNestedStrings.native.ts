import * as pi from 'pareto-core-internals'

import * as mapi from "../api"

import { post } from "../native/post.native"

export const $$: mapi.CjoinNestedStrings = ($c) => {
    return ($) => {
        return post(pi.flatten($), $c)
    }
}