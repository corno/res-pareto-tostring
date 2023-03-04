import * as pl from 'pareto-core-lib'


import * as gmain from "res-pareto-main"
import * as gtest from "lib-pareto-test"

import { $$ as getTestSet } from "./getTestSet.p"

import { Cmain } from "../definition/api.generated"

export const $$:Cmain = ($) => {
    gtest.$a.createTestProgram({
        'getTestSet': getTestSet,
        'log': gmain.$r.log,
        'logError': gmain.$r.logError,
        'onTestErrors': gmain.$r.setExitCodeToFailed
    })($)
}