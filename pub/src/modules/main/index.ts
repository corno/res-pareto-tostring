import { API } from "./api"
import { igetArrayAsString } from "./implementations/getArrayAsString.p"
import { igetKeysAsString } from "./implementations/getKeysAsString.p"
import { igetNumberOfKeysAsString } from "./implementations/getNumberOfKeysAsString.p"
import { ijoinNestedStrings } from "./implementations/joinNestedStrings.p"

export * from "./api"

export const $a: API = {
    "getArrayAsString": igetArrayAsString,
    "getKeysAsString": igetKeysAsString,
    "getNumberOfKeysAsString": igetNumberOfKeysAsString,
    "joinNestedStrings": ijoinNestedStrings,
}