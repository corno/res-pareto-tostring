


import { A } from "../api.generated"

export const $$: A.getNumberOfKeysAsString = () => {
    return ($) => {
        let count = 0
        $.map(($) => {
            count += 1
        })
        return `${count}`
    }
}