import * as pr from 'pareto-core-raw'

import * as mproject from "lib-pareto-typescript-project/dist/submodules/project"

const d = pr.wrapRawDictionary

import { $ as api } from "./api.p"

export const $: mproject.TProject = {
    'author': "Corno",
    'description': "a pareto wrapper to create strings from complex types (dictionaries, arrays, nested types etcetera). Useful for (error) reporting. Should not be used in core functionality",
    'license': "ISC",
    
    'pubdependencies': d({
        "glo-pareto-common": {},
    }),
    'type': ['resource', {
        'definition': api,
        'devDependencies': d({
        }),
        'test': {
            'dependencies': d({
            }),
        }
    }],
}