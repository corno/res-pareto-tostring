import * as pd from 'pareto-core-data'

import { algorithm, dependent, sfunction, typeReference } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"
const d = pd.d

export const $: g_project.T.ModuleDefinition.api.root<pd.SourceLocation> = {
    'algorithms': d({
        "getArrayAsString": algorithm(sfunction("this", {}, "GetArrayAsString"), dependent(typeReference("this", {}, "Configuration"), {}, {})),
        "getLengthAsString": algorithm(sfunction("this", {}, "GetLengthAsString")),
        "getKeysAsString": algorithm(sfunction("this", {}, "GetKeysAsString"), dependent(typeReference("this", {}, "Configuration"), {}, {})),
        "getNumberOfKeysAsString": algorithm(sfunction("this", {}, "GetNumberOfKeysAsString")),
        "joinNestedStrings": algorithm(sfunction("this", {}, "JoinNestedStrings"), dependent(typeReference("this", {}, "Configuration"), {}, {})),
    }),
}