import * as pt from 'pareto-core-types'
import * as mcommon from "glo-pareto-common"

export type TDictionary = pt.Dictionary<null>

export type TDictionaryAndSeparator = {
    readonly 'dictionary': pt.Dictionary<null>
    readonly 'separator': string
}

export type TNestedStrings = {
    readonly 'separator': string
    readonly 'strings': pt.Nested<string>
}

export type TStringArray = {
    readonly 'array': pt.Array<string>
    readonly 'separator': string
}

export type FGetArrayAsString = ($: TStringArray,) => mcommon.TString

export type FGetKeysAsString = ($: TDictionaryAndSeparator,) => mcommon.TString

export type FGetNumberOfKeysAsString = ($: TDictionary,) => mcommon.TString

export type FJoinNestedStrings = ($: TNestedStrings,) => mcommon.TString