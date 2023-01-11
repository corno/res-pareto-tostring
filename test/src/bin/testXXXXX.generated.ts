import * as pt from "pareto-core-types"
import * as pr from "pareto-core-raw"
import * as pl from "pareto-core-lib"

import { test as main_getArrayAsString } from "../modules/main/getArrayAsString.p"
import { test as main_getKeysAsString } from "../modules/main/getKeysAsString.p"
import { test as main_getNumberOfKeysAsString } from "../modules/main/getNumberOfKeysAsString.p"
import { test as main_joinNestedStrings } from "../modules/main/joinNestedStrings.p"

const x = pr.wrapRawDictionary({
    "main": pr.wrapRawDictionary({
        "getArrayAsString": main_getArrayAsString,
        "getKeysAsString": main_getKeysAsString,
        "getNumberOfKeysAsString": main_getNumberOfKeysAsString,
        "joinNestedStrings": main_joinNestedStrings,
    }),
}).asyncMap(($, key) => $.asyncMap(($, key) => $()))