import * as pd from 'pareto-core-data'

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"
import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"

const d = pd.d
import { external, this_ } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import { $ as glossary } from "./glossary.data"
import { $ as api } from "./api.data"

export const $: g_project.T.Project<pd.SourceLocation> = {
    'author': "Corno",
    'description': "a pareto wrapper to create strings from complex types (dictionaries, arrays, nested types etcetera). Useful for (error) reporting. Should not be used in core functionality",
    'license': "TBD",

    'dependencies': d({
        "glo-pareto-common": null,
    }),
    'type': ['resource', {
        'definition': {
            'glossary': {
                'root': glossary,
                'imports': d({
                    "common": external("glo-pareto-common"),
                }),
            },
            'api': {
                'root': api,

                'imports': d({
                    "this": this_(),
                }),
            },
        },
        'temp': {
            'nativeDependencies': d({}),
            'devDependencies': d({
            }),
        },
        'test': {
            'dependencies': d({
            }),
            'definition': {
                'glossary': {
                    'root': {
                        'parameters': d({}),
                        'imports': d({}),
                        'types': d({}),
                        'asynchronous': {
                            'interfaces': d({}),
                            'algorithms': d({}),
                            
                        },
                        'synchronous': {
                            'interfaces': d({}),
                            'algorithms': d({}),
                            
                        },
                    },
                    'imports': d({}),
                },
                'api': {
                    'root': {
                        'algorithms': d({}),
                    },
                    'imports': d({}),
                },
            },
            'imports': d({}),
        }
    }],
}