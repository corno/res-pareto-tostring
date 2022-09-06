
import * as api from "api-pareto-tostring"
import { joinNestedStringsImp } from "../private/joinNestedStringsImp"

export const joinNestedStrings: api.FJoinNestedString = (
    $
) => {
    return joinNestedStringsImp($)
}