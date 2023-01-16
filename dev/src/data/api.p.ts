import * as pr from "pareto-core-raw"

import {
    externalReference as er,
    string as str,
    nullType,
    type,
    reference as ref,
    boolean as bln,
    number as nr,
    nested,
    template,
    dictionary, group as grp, member, taggedUnion, types, _function, group,
    array,
} from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"

import { string, reference, externalReference, number, boolean } from "lib-pareto-typescript-project/dist/modules/moduleDefinition/api/shorthands.p"

import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/modules/moduleDefinition"
const d = pr.wrapRawDictionary

export const $: mmoduleDefinition.TModuleDefinition = {
    'glossary': {
        'imports': d({
            // "project": "../../project",
            // "common": "glo-pareto-common",
            // "main": "glo-pareto-main",
        }),
        'namespace': {
            'types': types({
                "StringArray": group({
                    "array": member(array(str())),
                    "separator": member(str()),

                }),
                "DictionaryAndSeparator": group({
                    "dictionary": member(['dictionary', nullType()]),
                    "separator": member(str()),
                }),
                "Dictionary": ['dictionary', nullType()],
                "NestedStrings": group({
                    "strings": member(nested(str())),
                    "separator": member(str()),
                }),
            }),
            'interfaces': d({}),

        },
        'functions': d({
            "GetArrayAsString": {
                'data': reference("StringArray"),
                'return value': string()
            },
            "GetKeysAsString": {
                'data': reference("DictionaryAndSeparator"),
                'return value': string()
            },
            // "GetLengthAsString": {
            //     'data': reference("Array"),
            //     'return value': string()
            // },
            "GetNumberOfKeysAsString": {
                'data': reference("Dictionary"),
                'return value': string()
            },
            "JoinNestedStrings": {
                'data': reference("NestedStrings"),
                'return value': string()
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