import * as pt from 'pareto-core-types'

import * as g_common from "glo-pareto-common"

export namespace N {}

export namespace T {
    
    export namespace Configuration {
        
        export namespace maximum {
            
            export namespace O {
                
                export type maximum = number
                
                export type suffix = string
            }
            
            export type O = {
                readonly 'maximum': number
                readonly 'suffix': string
            }
        }
        
        export type maximum = [ false ] | [ true, {
            readonly 'maximum': number
            readonly 'suffix': string
        }]
        
        export type separator = string
    }
    
    export type Configuration = {
        readonly 'maximum': [ false ] | [ true, {
            readonly 'maximum': number
            readonly 'suffix': string
        }]
        readonly 'separator': string
    }
    
    export namespace Dictionary {
        
        export type D = null
    }
    
    export type Dictionary = pt.Dictionary<null>
    
    export namespace NullArray {
        
        export type A = null
    }
    
    export type NullArray = pt.Array<null>
    
    export namespace StringArray {
        
        export type A = string
    }
    
    export type StringArray = pt.Array<string>
}