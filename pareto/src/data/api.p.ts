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

import { string, reference, externalReference, number, boolean } from "lib-pareto-typescript-project/dist/modules/moduleDefinition/api/shorthands.p"

import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/modules/moduleDefinition"
const d = pr.wrapRawDictionary

export const $: mmoduleDefinition.TModuleDefinition = {
    'glossary': {
        'imports': d({
            // "project": "../../project",
            "common": "glo-pareto-common",
            // "main": "glo-pareto-main",
        }),
        'namespace': {
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

        },
        'functions': d({
            "GetArrayAsString": {
                'data': typeReference("StringArray"),
                'return value': externalTypeReference("common", "String"),
            },
            "GetKeysAsString": {
                'data': typeReference("DictionaryAndSeparator"),
                'return value': externalTypeReference("common", "String"),
            },
            // "GetLengthAsString": {
            //     'data': reference("Array"),
            //     'return value': string()
            // },
            "GetNumberOfKeysAsString": {
                'data': typeReference("Dictionary"),
                'return value': externalTypeReference("common", "String"),
            },
            "JoinNestedStrings": {
                'data': typeReference("NestedStrings"),
                'return value': externalTypeReference("common", "String"),
            },
        }),
        'callbacks': d({
        }),
        'pipes': d({}),
    },
    'api': {
        'imports': d({
            // "main": "glo-pareto-main",
        }),
        'algorithms': d({
            "getArrayAsString": {
                'definition': ['function', {
                    'function': "GetArrayAsString"
                }],
                'type': ['reference', null],
            },
            "getKeysAsString": {
                'definition': ['function', {
                    'function': "GetKeysAsString"
                }],
                'type': ['reference', null],
            },
            // "getLengthAsString": {
            //     'definition': ['function', {
            //         'function': "GetArrayAsString"
            //     }],
            //     'type': ['reference', null],
            // },
            "getNumberOfKeysAsString": {
                'definition': ['function', {
                    'function': "GetNumberOfKeysAsString"
                }],
                'type': ['reference', null],
            },
            "joinNestedStrings": {
                'definition': ['function', {
                    'function': "JoinNestedStrings"
                }],
                'type': ['reference', null],
            },
        })
    },
}