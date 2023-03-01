import * as api from "../api"

export function post(
    arr: string[],
    conf: api.T.Configuration
) {
    const formatted = arr.map($ => `'${$}'`)
    if (conf.maximum[0] === true) {
       const maxAmount = conf.maximum[1].maximum
       if (arr.length > maxAmount) {
          formatted.splice(maxAmount)
          formatted.push(conf.maximum[1].suffix)
      }
    }
    return `${arr.join(conf.separator)}`
}