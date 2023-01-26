import * as pt from 'pareto-core-types'

import * as t from './types.generated'

import * as mcommon from "glo-pareto-common"

export type TDictionary = t.UDictionary

export type TDictionaryAndSeparator = t.UDictionaryAndSeparator

export type TNestedStrings = t.UNestedStrings

export type TStringArray = t.UStringArray

export type FGetArrayAsString = ($: TStringArray,) => mcommon.TString

export type FGetKeysAsString = ($: TDictionaryAndSeparator,) => mcommon.TString

export type FGetNumberOfKeysAsString = ($: TDictionary,) => mcommon.TString

export type FJoinNestedStrings = ($: TNestedStrings,) => mcommon.TString