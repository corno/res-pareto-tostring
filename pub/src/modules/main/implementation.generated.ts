import { API } from "./api"
import { $$ as igetArrayAsString } from "./implementations/getArrayAsString.p"
import { $$ as igetKeysAsString } from "./implementations/getKeysAsString.p"
import { $$ as igetNumberOfKeysAsString } from "./implementations/getNumberOfKeysAsString.p"
import { $$ as ijoinNestedStrings } from "./implementations/joinNestedStrings.p"

export const $a: API = {
    'getArrayAsString': igetArrayAsString,
    'getKeysAsString': igetKeysAsString,
    'getNumberOfKeysAsString': igetNumberOfKeysAsString,
    'joinNestedStrings': ijoinNestedStrings,
}