
import * as api from "../../interface"
import { joinNestedStringsImp } from "../private/joinNestedStringsImp.p"

export const joinNestedStrings: api.FJoinNestedString = ($) => {
    return joinNestedStringsImp($)
}