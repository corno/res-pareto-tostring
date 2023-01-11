import * as pr from "pareto-core-raw"
import {
    externalReference as er,
    string as str,
    reference as ref,
    boolean as bln,
    nullType,
    array,
    nested,
} from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"
import { dictionary, group, member, taggedUnion, types, _function } from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"


import { string, reference, externalReference, number, boolean } from "lib-pareto-typescript-project/dist/modules/api/api/shorthands.p"
import * as NProject from "lib-pareto-typescript-project/dist/modules/project"
const wd = pr.wrapRawDictionary
export const project: NProject.TProject = {
    'type': ['resource', null],
    'modules': wd({
        "main": {
            'definition': {
                'glossary': {
                    'imports': wd({
                        // "project": "../../project",
                        // "common": "glo-pareto-common",
                        // "main": "glo-pareto-main",
                    }),
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
                    'functions': wd({
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
                    'interfaces': wd({}),
                    'callbacks': wd({
                    }),
                    'pipes': wd({}),
                },
                'api': {
                    'imports': wd({
                        // "main": "glo-pareto-main",
                    }),
                    'algorithms': wd({
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
            },
            'implementation': {}

        },
    }),
    'main': "main"
}