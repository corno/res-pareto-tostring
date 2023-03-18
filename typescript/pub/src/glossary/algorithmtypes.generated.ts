import * as pt from 'pareto-core-types'

import { T } from "./datatypes.generated"

import * as g_common from "glo-pareto-common"

export namespace ASYNC {
    
    export namespace I {}
    
    export namespace C {}
    
    export namespace F {}
}

export namespace SYNC {
    
    export namespace I {}
    
    export namespace I2 {}
    
    export namespace I3 {}
    
    export namespace C {}
    
    export namespace C2 {}
    
    export namespace C3 {}
    
    export namespace F {
        
        export type GetArrayAsString = ($: T.StringArray) => g_common.T.String
        
        export type GetKeysAsString = ($: T.Dictionary) => g_common.T.String
        
        export type GetLengthAsString = ($: T.NullArray) => g_common.T.String
        
        export type GetNumberOfKeysAsString = ($: T.Dictionary) => g_common.T.String
        
        export type JoinNestedStrings = ($: g_common.T.Path) => g_common.T.String
    }
}