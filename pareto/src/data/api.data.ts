import * as pd from 'pareto-core-data'

import { algorithm, dependent, sfunction, data } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"
const d = pd.d

export const $: g_project.T.ModuleDefinition.api.root<pd.SourceLocation> = {
    'algorithms': d({
        "getArrayAsString": algorithm(sfunction("this", {}, "GetArrayAsString"), {}, dependent(data("this", {}, "Configuration"), {}, {})),
        "getLengthAsString": algorithm(sfunction("this", {}, "GetLengthAsString")),
        "getKeysAsString": algorithm(sfunction("this", {}, "GetKeysAsString"), {}, dependent(data("this", {}, "Configuration"), {}, {})),
        "getNumberOfKeysAsString": algorithm(sfunction("this", {}, "GetNumberOfKeysAsString")),
    }),
}