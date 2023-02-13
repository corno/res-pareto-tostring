import * as pt from 'pareto-core-types'

import { T   } from './types.generated'

import * as mcommon from "glo-pareto-common"

export type FGetArrayAsString = ($: T.StringArray,) => mcommon.T.String

export type FGetKeysAsString = ($: T.KeysAsStringData,) => mcommon.T.String

export type FGetNumberOfKeysAsString = ($: T.Dictionary,) => mcommon.T.String

export type FJoinNestedStrings = ($: T.NestedStrings,) => mcommon.T.String