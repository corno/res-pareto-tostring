import * as pd from 'pareto-core-data'

import {
    string,
    null_,
    nested,
    dictionary, member, taggedUnion, types, group,
    array,
    typeReference,
    data,
    func,
    type,
    optional,
    number,
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import { definitionReference, constructor, algorithm } from "lib-pareto-typescript-project/dist/submodules/moduleDefinition/shorthands"

import * as gmoduleDefinition from "lib-pareto-typescript-project/dist/submodules/moduleDefinition"
const d = pd.d

export const $: gmoduleDefinition.T.ModuleDefinition<pd.SourceLocation> = {
    'glossary': {
        'imports': d({
            "common": "glo-pareto-common",
        }),
        'parameters': d({}),
        'types': d({
            "NullArray": type(array(null_())),
            "StringArray": type(array(string())),
            "Configuration": type(group({
                "separator": member(string()),
                "maximum": member(optional(group({
                    "maximum": member(number()),
                    "suffix": member(string())
                }))),
            })),
            "Dictionary": type(dictionary(null_())),
        }),
        'interfaces': d({}),
        'functions': d({
            "GetLengthAsString": func(typeReference("NullArray"), null, null, data(typeReference("common", "String"), false)),
            "GetArrayAsString": func(typeReference("StringArray"), null, null, data(typeReference("common", "String"), false)),
            "GetKeysAsString": func(typeReference("Dictionary"), null, null, data(typeReference("common", "String"), false)),
            "GetNumberOfKeysAsString": func(typeReference("Dictionary"), null, null, data(typeReference("common", "String"), false)),
            "JoinNestedStrings": func(typeReference("common", "Path"), null, null, data(typeReference("common", "String"), false)),
        }),
    },
    'api': {
        'imports': d({
        }),
        'algorithms': d({
            "getArrayAsString": algorithm(definitionReference("GetArrayAsString"), constructor(typeReference("Configuration"), {})),
            "getLengthAsString": algorithm(definitionReference("GetLengthAsString")),
            "getKeysAsString": algorithm(definitionReference("GetKeysAsString"), constructor(typeReference("Configuration"), {})),
            "getNumberOfKeysAsString": algorithm(definitionReference("GetNumberOfKeysAsString")),
            "joinNestedStrings": algorithm(definitionReference("JoinNestedStrings"), constructor(typeReference("Configuration"), {})),
        })
    },
}