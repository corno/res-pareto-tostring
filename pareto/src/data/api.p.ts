import * as pr from 'pareto-core-raw'

import {
    string,
    null_,
    nested,
    template,
    dictionary, member, taggedUnion, types, _function, group,
    array,
    typeReference,
} from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"

import { definitionReference, constructor, algorithm } from "lib-pareto-typescript-project/dist/modules/moduleDefinition/api/shorthands.p"

import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/modules/moduleDefinition"
const d = pr.wrapRawDictionary

export const $: mmoduleDefinition.TModuleDefinition = {
    'glossary': {
        'imports': d({
            "common": "glo-pareto-common",
        }),
        'parameters': d({}),
        'templates': d({}),
        'types': types({
            "StringArray": group({
                "array": member(array(string())),
                "separator": member(string()),

            }),
            "DictionaryAndSeparator": group({
                "dictionary": member(dictionary(null_())),
                "separator": member(string()),
            }),
            "Dictionary": dictionary(null_()),
            "NestedStrings": group({
                "strings": member(nested(string())),
                "separator": member(string()),
            }),
        }),
        'interfaces': d({}),
        'functions': d({
            "GetArrayAsString": _function(typeReference("StringArray"), typeReference("common", "String")),
            "GetKeysAsString": _function(typeReference("DictionaryAndSeparator"), typeReference("common", "String")),
            "GetNumberOfKeysAsString": _function(typeReference("Dictionary"), typeReference("common", "String")),
            "JoinNestedStrings": _function(typeReference("NestedStrings"), typeReference("common", "String")),
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