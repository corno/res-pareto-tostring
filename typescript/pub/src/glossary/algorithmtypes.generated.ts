import * as pt from 'pareto-core-types'

import { T } from "./datatypes.generated"

import * as g_common from "glo-pareto-common"

export namespace ASYNC {
    
    export namespace I {}
    
    export namespace A {}
}

export namespace SYNC {
    
    export namespace I {}
    
    export namespace IW {}
    
    export namespace A {
        
        
        export namespace F {
            export type GetArrayAsString = ($: T.StringArray) => g_common.T.String
        }
        
        
        export namespace F {
            export type GetKeysAsString = ($: T.Dictionary) => g_common.T.String
        }
        
        
        export namespace F {
            export type GetLengthAsString = ($: T.NullArray) => g_common.T.String
        }
        
        
        export namespace F {
            export type GetNumberOfKeysAsString = ($: T.Dictionary) => g_common.T.String
        }
        
        
        export namespace F {
            export type JoinNestedStrings = ($: g_common.T.Path) => g_common.T.String
        }
    }
}