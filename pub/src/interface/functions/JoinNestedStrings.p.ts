import * as pt from "pareto-core-types"

export type FJoinNestedString = (
    $: {
        readonly "strings": pt.Nested<string>
        readonly "separator": null | string
    }
) => string