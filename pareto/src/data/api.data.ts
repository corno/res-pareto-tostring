import * as pd from 'pareto-core-data'

import { functionReference, constructor, algorithm, typeReference } from "lib-pareto-typescript-project/dist/submodules/api/shorthands"

import * as gapi from "lib-pareto-typescript-project/dist/submodules/api"
const d = pd.d

export const $: gapi.T.API<pd.SourceLocation> = {
    'algorithms': d({
        "getArrayAsString": algorithm(functionReference("this", {}, "GetArrayAsString"), constructor(typeReference("this", {}, "Configuration"), {})),
        "getLengthAsString": algorithm(functionReference("this", {}, "GetLengthAsString")),
        "getKeysAsString": algorithm(functionReference("this", {}, "GetKeysAsString"), constructor(typeReference("this", {}, "Configuration"), {})),
        "getNumberOfKeysAsString": algorithm(functionReference("this", {}, "GetNumberOfKeysAsString")),
        "joinNestedStrings": algorithm(functionReference("this", {}, "JoinNestedStrings"), constructor(typeReference("this", {}, "Configuration"), {})),
    })
}