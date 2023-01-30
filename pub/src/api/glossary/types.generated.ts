import * as pt from 'pareto-core-types'

import * as mcommon from "glo-pareto-common"

export namespace GDictionary {}
export type GDictionary = pt.Dictionary<null>
export type UDictionary = GDictionary

export namespace GDictionaryAndSeparator {
    
    export namespace Pdictionary {}
    export type Pdictionary = pt.Dictionary<null>
}
export type GDictionaryAndSeparator = {
    readonly 'dictionary': GDictionaryAndSeparator.Pdictionary
    readonly 'separator': string
}
export type UDictionaryAndSeparator = GDictionaryAndSeparator

export namespace GNestedStrings {
    
    export namespace Pstrings {}
    export type Pstrings = pt.Nested<string>
}
export type GNestedStrings = {
    readonly 'separator': string
    readonly 'strings': GNestedStrings.Pstrings
}
export type UNestedStrings = GNestedStrings

export namespace GStringArray {
    
    export namespace Parray {}
    export type Parray = pt.Array<string>
}
export type GStringArray = {
    readonly 'array': GStringArray.Parray
    readonly 'separator': string
}
export type UStringArray = GStringArray