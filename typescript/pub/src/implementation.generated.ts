import { API } from "./api.generated"
import { $$ as igetArrayAsString } from "./implementations/getArrayAsString.native"
import { $$ as igetKeysAsString } from "./implementations/getKeysAsString.native"
import { $$ as igetLengthAsString } from "./implementations/getLengthAsString.native"
import { $$ as igetNumberOfKeysAsString } from "./implementations/getNumberOfKeysAsString.native"

export const $api: API = {
    'getArrayAsString': igetArrayAsString,
    'getKeysAsString': igetKeysAsString,
    'getLengthAsString': igetLengthAsString,
    'getNumberOfKeysAsString': igetNumberOfKeysAsString,
}