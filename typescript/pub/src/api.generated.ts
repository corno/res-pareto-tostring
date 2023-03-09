import * as pt from 'pareto-core-types'

import * as g_this from "./glossary"

export type getArrayAsString = ($: g_this.T.Configuration, $d: {}) => g_this.F.GetArrayAsString

export type getKeysAsString = ($: g_this.T.Configuration, $d: {}) => g_this.F.GetKeysAsString

export type getLengthAsString = g_this.F.GetLengthAsString

export type getNumberOfKeysAsString = g_this.F.GetNumberOfKeysAsString

export type joinNestedStrings = ($: g_this.T.Configuration, $d: {}) => g_this.F.JoinNestedStrings

export type API = {
    getArrayAsString: getArrayAsString
    getKeysAsString: getKeysAsString
    getLengthAsString: getLengthAsString
    getNumberOfKeysAsString: getNumberOfKeysAsString
    joinNestedStrings: joinNestedStrings
}