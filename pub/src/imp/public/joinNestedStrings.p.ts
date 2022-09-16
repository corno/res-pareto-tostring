
import * as api from "api-pareto-tostring"
import { joinNestedStringsImp } from "../private/joinNestedStringsImp.p"

export const joinNestedStrings: api.FJoinNestedString = ($) => {
    return joinNestedStringsImp($)
}