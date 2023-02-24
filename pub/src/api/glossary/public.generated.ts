import * as pt from 'pareto-core-types'

import { T   } from './types.generated'

import * as gcommon from "glo-pareto-common"

export type FGetArrayAsString = ($: T.StringArray,) => gcommon.T.String

export type FGetKeysAsString = ($: T.Dictionary,) => gcommon.T.String

export type FGetLengthAsString = ($: T.NullArray,) => gcommon.T.String

export type FGetNumberOfKeysAsString = ($: T.Dictionary,) => gcommon.T.String

export type FJoinNestedStrings = ($: gcommon.T.Path,) => gcommon.T.String