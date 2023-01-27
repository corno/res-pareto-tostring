import * as pr from 'pareto-core-raw'

import {
    externalReference as er,
    string as str,
    null_,
    reference as ref,
    boolean as bln,
    number as nr,
    nested,
    template,
    dictionary, group as grp, member, taggedUnion, types, _function, group,
    array,
    typeReference,
    externalTypeReference,
} from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"

import { definitionReference, externalDefinitionReference, constructor } from "lib-pareto-typescript-project/dist/modules/moduleDefinition/api/shorthands.p"

import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/modules/moduleDefinition"
const d = pr.wrapRawDictionary

export const $: mmoduleDefinition.TModuleDefinition = {
    'glossary': {
        'imports': d({
            // "project": "../../project",
            "common": "glo-pareto-common",
            // "main": "glo-pareto-main",
        }),
        'parameters': d({}),
        'templates': d({}),
        'types': types({
            "StringArray": group({
                "array": member(array(str())),
                "separator": member(str()),

            }),
            "DictionaryAndSeparator": group({
                "dictionary": member(['dictionary', null_()]),
                "separator": member(str()),
            }),
            "Dictionary": ['dictionary', null_()],
            "NestedStrings": group({
                "strings": member(nested(str())),
                "separator": member(str()),
            }),
        }),
        'interfaces': d({}),
        'functions': d({
            "GetArrayAsString": _function(typeReference("StringArray"), externalTypeReference("common", "String")),
            "GetKeysAsString": _function(typeReference("DictionaryAndSeparator"), externalTypeReference("common", "String")),
            // "GetLengthAsString": {
            //     'data': reference("Array"),
            //     'return value': string()
            // },
            "GetNumberOfKeysAsString": _function(typeReference("Dictionary"), externalTypeReference("common", "String")),
            "JoinNestedStrings": _function(typeReference("NestedStrings"), externalTypeReference("common", "String")),
        }),
    },
    'api': {
        'imports': d({
            // "main": "glo-pareto-main",
        }),
        'algorithms': d({
            "getArrayAsString": {
                'definition': {
                    'function': "GetArrayAsString"
                },
                'type': ['reference', null],
            },
            "getKeysAsString": {
                'definition': {
                    'function': "GetKeysAsString"
                },
                'type': ['reference', null],
            },
            // "getLengthAsString": {
            //     'definition': {
            //         'function': "GetArrayAsString"
            //     },
            //     'type': ['reference', null],
            // },
            "getNumberOfKeysAsString": {
                'definition': {
                    'function': "GetNumberOfKeysAsString"
                },
                'type': ['reference', null],
            },
            "joinNestedStrings": {
                'definition': {
                    'function': "JoinNestedStrings"
                },
                'type': ['reference', null],
            },
        })
    },
}