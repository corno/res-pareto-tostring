import * as pt from "pareto-core-types"

export type FGetArrayAsString = (
    $: {
        readonly "array": pt.Array<string>,
        readonly "separator": null | string
    }
) => string