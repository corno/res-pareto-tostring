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
            "StringArray": type(group({
                "array": member(array(string())),
                "separator": member(string()),

            })),
            "KeysAsStringData": type(group({
                "dictionary": member(dictionary(null_())),
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
            "GetArrayAsString": func(typeReference("StringArray"), null, null, data(typeReference("common", "String"), false)),
            "GetKeysAsString": func(typeReference("KeysAsStringData"), null, null, data(typeReference("common", "String"), false)),
            "GetNumberOfKeysAsString": func(typeReference("Dictionary"), null, null, data(typeReference("common", "String"), false)),
            "JoinNestedStrings": func(typeReference("NestedStrings"), null, null, data(typeReference("common", "String"), false)),
        }),
    },
    'api': {
        'imports': d({
        }),
        'algorithms': d({
            "getArrayAsString": algorithm(definitionReference("GetArrayAsString")),
            "getKeysAsString": algorithm(definitionReference("GetKeysAsString")),
            "getNumberOfKeysAsString": algorithm(definitionReference("GetNumberOfKeysAsString")),
            "joinNestedStrings": algorithm(definitionReference("JoinNestedStrings")),
        })
    },
}