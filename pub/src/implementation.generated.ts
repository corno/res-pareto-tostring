import { API } from "./api"
import { $$ as igetArrayAsString } from "./implementations/getArrayAsString.native"
import { $$ as igetKeysAsString } from "./implementations/getKeysAsString.native"
import { $$ as igetNumberOfKeysAsString } from "./implementations/getNumberOfKeysAsString.native"
import { $$ as ijoinNestedStrings } from "./implementations/joinNestedStrings.native"

export const $a: API = {
    'getArrayAsString': igetArrayAsString,
    'getKeysAsString': igetKeysAsString,
    'getNumberOfKeysAsString': igetNumberOfKeysAsString,
    'joinNestedStrings': ijoinNestedStrings,
}