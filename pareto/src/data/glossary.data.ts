import * as pd from 'pareto-core-data'

import {
    string,
    null_,
    nested,
    dictionary, member, taggedUnion, types, group,
    array,
    typeReference,
    sdata,
    sfunc,
    type,
    optional,
    number,
    imp,
    externalTypeReference,
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
    'type': ['synchronous', {
        'builders': d({}),
        'functions': d({
            "GetLengthAsString": sfunc(typeReference("NullArray"), null, null, sdata(externalTypeReference("common", "String"))),
            "GetArrayAsString": sfunc(typeReference("StringArray"), null, null, sdata(externalTypeReference("common", "String"))),
            "GetKeysAsString": sfunc(typeReference("Dictionary"), null, null, sdata(externalTypeReference("common", "String"))),
            "GetNumberOfKeysAsString": sfunc(typeReference("Dictionary"), null, null, sdata(externalTypeReference("common", "String"))),
            "JoinNestedStrings": sfunc(externalTypeReference("common", "Path"), null, null, sdata(externalTypeReference("common", "String"))),
        }),

    }],
}