import * as pt from 'pareto-core-types'

import * as glo from "./glossary"


export type CgetArrayAsString = ($: glo.T.Configuration, $d: {}) => glo.FGetArrayAsString

export type CgetKeysAsString = ($: glo.T.Configuration, $d: {}) => glo.FGetKeysAsString

export type CgetLengthAsString = glo.FGetArrayAsString

export type CgetNumberOfKeysAsString = glo.FGetNumberOfKeysAsString

export type CjoinNestedStrings = glo.FJoinNestedStrings

export type API = {
    getArrayAsString: CgetArrayAsString
    getKeysAsString: CgetKeysAsString
    getLengthAsString: CgetLengthAsString
    getNumberOfKeysAsString: CgetNumberOfKeysAsString
    joinNestedStrings: CjoinNestedStrings
}