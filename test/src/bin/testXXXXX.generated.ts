import * as pt from 'pareto-core-types'
import * as pr from 'pareto-core-raw'
import * as pl from 'pareto-core-lib'
import * as tst from "lib-pareto-test"

import { test as main_getArrayAsString } from "../modules/main/getArrayAsString.generated"
import { test as main_getKeysAsString } from "../modules/main/getKeysAsString.generated"
import { test as main_getNumberOfKeysAsString } from "../modules/main/getNumberOfKeysAsString.generated"
import { test as main_joinNestedStrings } from "../modules/main/joinNestedStrings.generated"

const x = pr.wrapRawDictionary<pt.Dictionary<() => pt.AsyncValue<tst.TTestElement>>>({
    'main': pr.wrapRawDictionary({
        'getArrayAsString': main_getArrayAsString,
        'getKeysAsString': main_getKeysAsString,
        'getNumberOfKeysAsString': main_getNumberOfKeysAsString,
        'joinNestedStrings': main_joinNestedStrings,
    }),
}).asyncMap(($, key) => $.asyncMap(($, key) => $()))