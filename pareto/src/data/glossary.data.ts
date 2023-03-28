import * as pd from 'pareto-core-data'

import {
    array, data, dictionary, externalTypeReference, group, imp, member, null_, number, optional, sfunction, string, type, typeReference
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"
const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({}),
    'imports': d({
        "common": imp({}),
    }),
    'root': {
        'namespaces': d({}),
        'types': d({
            "NullArray": type(array(null_())),
            "StringArray": type(array(string())),
            "Configuration": type(group({
                "separator": member(string()),
                "maximum": member(optional(group({
                    "maximum": member(number()),
                    "suffix": member(string()),
                }))),
            })),
            "Dictionary": type(dictionary(null_())),
        }),
    },
    'asynchronous': {
        'interfaces': d({}),
        'algorithms': d({}),

    },
    'synchronous': {
        'interfaces': d({}),
        'algorithms': d({
            "GetLengthAsString": sfunction(externalTypeReference("common", "String"), data(typeReference("NullArray"))),
            "GetArrayAsString": sfunction(externalTypeReference("common", "String"), data(typeReference("StringArray"))),
            "GetKeysAsString": sfunction(externalTypeReference("common", "String"), data(typeReference("Dictionary"))),
            "GetNumberOfKeysAsString": sfunction(externalTypeReference("common", "String"), data(typeReference("Dictionary"))),
            "JoinNestedStrings": sfunction(externalTypeReference("common", "String"), data(externalTypeReference("common", "Path"))),
        }),
    },
}