import * as pr from 'pareto-core-raw'

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
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands.p"

import { definitionReference, constructor, algorithm } from "lib-pareto-typescript-project/dist/submodules/moduleDefinition/shorthands.p"

import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/submodules/moduleDefinition"
const d = pr.wrapRawDictionary

export const $: mmoduleDefinition.T.ModuleDefinition = {
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
            "NestedStrings": type(group({
                "strings": member(nested(string())),
                "separator": member(string()),
            })),
        }),
        'interfaces': d({}),
        'functions': d({
            "GetLengthAsString": func(typeReference("NullArray"), null, null, data(typeReference("common", "String"), false)),
            "GetArrayAsString": func(typeReference("StringArray"), null, null, data(typeReference("common", "String"), false)),
            "GetKeysAsString": func(typeReference("Dictionary"), null, null, data(typeReference("common", "String"), false)),
            "GetNumberOfKeysAsString": func(typeReference("Dictionary"), null, null, data(typeReference("common", "String"), false)),
            "JoinNestedStrings": func(typeReference("NestedStrings"), null, null, data(typeReference("common", "String"), false)),
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
            "joinNestedStrings": algorithm(definitionReference("JoinNestedStrings")),
        })
    },
}