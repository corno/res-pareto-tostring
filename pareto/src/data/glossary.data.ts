import * as pd from 'pareto-core-data'

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
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as gglossary from "lib-pareto-typescript-project/dist/submodules/glossary"
const d = pd.d

export const $: gglossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({}),
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
    'builders': d({}),
    'interfaces': d({}),
    'functions': d({
        "GetLengthAsString": func(typeReference("NullArray"), null, null, data(typeReference("common", "String"), false)),
        "GetArrayAsString": func(typeReference("StringArray"), null, null, data(typeReference("common", "String"), false)),
        "GetKeysAsString": func(typeReference("Dictionary"), null, null, data(typeReference("common", "String"), false)),
        "GetNumberOfKeysAsString": func(typeReference("Dictionary"), null, null, data(typeReference("common", "String"), false)),
        "JoinNestedStrings": func(typeReference("common", "Path"), null, null, data(typeReference("common", "String"), false)),
    }),
}