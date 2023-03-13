import * as pt from 'pareto-core-types'

import { T } from './types.generated'

import * as g_common from "glo-pareto-common"

export namespace B {}

export namespace F {
    
    export type GetArrayAsString = ($: T.StringArray,) => g_common.T.String
    
    export type GetKeysAsString = ($: T.Dictionary,) => g_common.T.String
    
    export type GetLengthAsString = ($: T.NullArray,) => g_common.T.String
    
    export type GetNumberOfKeysAsString = ($: T.Dictionary,) => g_common.T.String
    
    export type JoinNestedStrings = ($: g_common.T.Path,) => g_common.T.String
}