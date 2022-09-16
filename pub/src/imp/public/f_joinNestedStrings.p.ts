
import * as api from "api-pareto-tostring"
import { f_joinNestedStringsImp } from "../private/f_joinNestedStringsImp"

export const f_joinNestedStrings: api.FJoinNestedString = (
    $
) => {
    return f_joinNestedStringsImp($)
}