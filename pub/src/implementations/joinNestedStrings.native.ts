import * as pi from "pareto-core-internals"

import * as api from "../api"
import { post } from "../native/post.native"

export const $$: api.CjoinNestedStrings = ($c) => {
    return ($) => {
        return post(pi.flatten($), $c)
    }
}