import * as g_this from "../glossary"

export function post(
    arr: string[],
    conf: g_this.T.Configuration
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