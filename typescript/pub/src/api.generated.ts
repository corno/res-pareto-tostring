import * as pt from 'pareto-core-types'

import * as g_this from "./glossary"

export namespace A {
    
    export type getArrayAsString = ($: g_this.T.Configuration, $d: {}, $se: {}) => g_this.SYNC.A.F.GetArrayAsString
    
    export type getKeysAsString = ($: g_this.T.Configuration, $d: {}, $se: {}) => g_this.SYNC.A.F.GetKeysAsString
    
    export type getLengthAsString = g_this.SYNC.A.F.GetLengthAsString
    
    export type getNumberOfKeysAsString = g_this.SYNC.A.F.GetNumberOfKeysAsString
    
    export type joinNestedStrings = ($: g_this.T.Configuration, $d: {}, $se: {}) => g_this.SYNC.A.F.JoinNestedStrings
}

export type API = {
    getArrayAsString: A.getArrayAsString
    getKeysAsString: A.getKeysAsString
    getLengthAsString: A.getLengthAsString
    getNumberOfKeysAsString: A.getNumberOfKeysAsString
    joinNestedStrings: A.joinNestedStrings
}