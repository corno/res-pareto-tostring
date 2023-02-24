import * as pt from 'pareto-core-types'

import * as gglo from "./glossary"


export type CgetArrayAsString = ($: gglo.T.Configuration, $d: {}) => gglo.FGetArrayAsString

export type CgetKeysAsString = ($: gglo.T.Configuration, $d: {}) => gglo.FGetKeysAsString

export type CgetLengthAsString = gglo.FGetLengthAsString

export type CgetNumberOfKeysAsString = gglo.FGetNumberOfKeysAsString

export type CjoinNestedStrings = ($: gglo.T.Configuration, $d: {}) => gglo.FJoinNestedStrings

export type API = {
    getArrayAsString: CgetArrayAsString
    getKeysAsString: CgetKeysAsString
    getLengthAsString: CgetLengthAsString
    getNumberOfKeysAsString: CgetNumberOfKeysAsString
    joinNestedStrings: CjoinNestedStrings
}