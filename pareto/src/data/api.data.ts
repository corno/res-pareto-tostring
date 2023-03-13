import * as pd from 'pareto-core-data'

import { functionReference, constructor, algorithm, typeReference } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"
const d = pd.d

export const $: g_project.T.Module.api.root<pd.SourceLocation> = {
    'algorithms': d({
        "getArrayAsString": algorithm(functionReference("this", {}, "GetArrayAsString"), constructor(typeReference("this", {}, "Configuration"), {})),
        "getLengthAsString": algorithm(functionReference("this", {}, "GetLengthAsString")),
        "getKeysAsString": algorithm(functionReference("this", {}, "GetKeysAsString"), constructor(typeReference("this", {}, "Configuration"), {})),
        "getNumberOfKeysAsString": algorithm(functionReference("this", {}, "GetNumberOfKeysAsString")),
        "joinNestedStrings": algorithm(functionReference("this", {}, "JoinNestedStrings"), constructor(typeReference("this", {}, "Configuration"), {})),
    }),
}