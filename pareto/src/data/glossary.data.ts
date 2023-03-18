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
    'asynchronous': {
        'interfaces': d({}),
        'constructors': d({}),
        'functions': d({}),
    },
    'synchronous': {
        'interfaces': d({}),
        'constructors': d({}),
        'functions': d({
            "GetLengthAsString": sfunction(data(typeReference("NullArray")), externalTypeReference("common", "String")),
            "GetArrayAsString": sfunction(data(typeReference("StringArray")), externalTypeReference("common", "String")),
            "GetKeysAsString": sfunction(data(typeReference("Dictionary")), externalTypeReference("common", "String")),
            "GetNumberOfKeysAsString": sfunction(data(typeReference("Dictionary")), externalTypeReference("common", "String")),
            "JoinNestedStrings": sfunction(data(externalTypeReference("common", "Path")), externalTypeReference("common", "String")),
        }),
    },
}