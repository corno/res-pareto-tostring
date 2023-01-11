import * as pt from "pareto-core-types"

export type TDictionary = pt.Dictionary<null>

export type TDictionaryAndSeparator = {
    readonly "dictionary": pt.Dictionary<null>
    readonly "separator": string
}

export type TNestedStrings = {
    readonly "separator": string
    readonly "strings": pt.Nested<string>
}

export type TStringArray = {
    readonly "array": pt.Array<string>
    readonly "separator": string
}

export type FGetArrayAsString = ($: TStringArray) => string

export type FGetKeysAsString = ($: TDictionaryAndSeparator) => string

export type FGetNumberOfKeysAsString = ($: TDictionary) => string

export type FJoinNestedStrings = ($: TNestedStrings) => string