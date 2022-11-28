import * as pt from "pareto-core-types"

export type FGetKeysAsString = <T>(
    $: {
        readonly "dictionary": pt.Dictionary<T>,
        readonly "separator": null | string
    }
) => string