import * as pt from 'pareto-core-types'

import * as glo from "./glossary"


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