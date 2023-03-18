import * as pt from 'pareto-core-types'

import * as g_this from "./glossary"
export namespace A {
    
    export type getArrayAsString = ($: g_this.T.Configuration, $d: {}, $se: {}) => g_this.SYNC.F.GetArrayAsString
    
    export type getKeysAsString = ($: g_this.T.Configuration, $d: {}, $se: {}) => g_this.SYNC.F.GetKeysAsString
    
    export type getLengthAsString = g_this.SYNC.F.GetLengthAsString
    
    export type getNumberOfKeysAsString = g_this.SYNC.F.GetNumberOfKeysAsString
    
    export type joinNestedStrings = ($: g_this.T.Configuration, $d: {}, $se: {}) => g_this.SYNC.F.JoinNestedStrings
}

export type API = {
    getArrayAsString: A.getArrayAsString
    getKeysAsString: A.getKeysAsString
    getLengthAsString: A.getLengthAsString
    getNumberOfKeysAsString: A.getNumberOfKeysAsString
    joinNestedStrings: A.joinNestedStrings
}