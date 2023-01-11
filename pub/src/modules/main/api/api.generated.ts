import * as pt from "pareto-core-types"

import * as glo from "./types.generated"


export type CgetArrayAsString = glo.FGetArrayAsString

export type CgetKeysAsString = glo.FGetKeysAsString

export type CgetNumberOfKeysAsString = glo.FGetNumberOfKeysAsString

export type CjoinNestedStrings = glo.FJoinNestedStrings

export type API = {
    getArrayAsString: CgetArrayAsString
    getKeysAsString: CgetKeysAsString
    getNumberOfKeysAsString: CgetNumberOfKeysAsString
    joinNestedStrings: CjoinNestedStrings
}