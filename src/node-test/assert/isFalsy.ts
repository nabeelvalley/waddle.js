import isFalse from './isFalse'

/**
 * Will return a pass if `actual` is falsey
 * @param actual
 */
const isFalsy = <T = any>(actual: T) => {
  isFalse(!!actual)
}

export default isFalsy
