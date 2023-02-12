import * as pt from 'pareto-core-types'

import * as mcommon from "glo-pareto-common"

export namespace T {
    
    export namespace Dictionary {
        
        export type D = null
    }
    
    export type Dictionary = pt.Dictionary<null>
    
    export namespace DictionaryAndSeparator {
        
        export namespace dictionary {
            
            export type D = null
        }
        
        export type dictionary = pt.Dictionary<null>
        
        export type separator = string
    }
    
    export type DictionaryAndSeparator = {
        readonly 'dictionary': pt.Dictionary<null>
        readonly 'separator': string
    }
    
    export namespace NestedStrings {
        
        export type separator = string
        
        export namespace strings {
            
            export type N = string
        }
        
        export type strings = pt.Nested<string>
    }
    
    export type NestedStrings = {
        readonly 'separator': string
        readonly 'strings': pt.Nested<string>
    }
    
    export namespace StringArray {
        
        export namespace array {
            
            export type A = string
        }
        
        export type array = pt.Array<string>
        
        export type separator = string
    }
    
    export type StringArray = {
        readonly 'array': pt.Array<string>
        readonly 'separator': string
    }
}