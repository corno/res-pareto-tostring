import * as pt from 'pareto-core-types'

import * as gthis from "./glossary"

export type CgetArrayAsString = ($: gthis.T.Configuration, $d: {}) => gthis.FGetArrayAsString

export type CgetKeysAsString = ($: gthis.T.Configuration, $d: {}) => gthis.FGetKeysAsString

export type CgetLengthAsString = gthis.FGetLengthAsString

export type CgetNumberOfKeysAsString = gthis.FGetNumberOfKeysAsString

export type CjoinNestedStrings = ($: gthis.T.Configuration, $d: {}) => gthis.FJoinNestedStrings

export type API = {
    getArrayAsString: CgetArrayAsString
    getKeysAsString: CgetKeysAsString
    getLengthAsString: CgetLengthAsString
    getNumberOfKeysAsString: CgetNumberOfKeysAsString
    joinNestedStrings: CjoinNestedStrings
}