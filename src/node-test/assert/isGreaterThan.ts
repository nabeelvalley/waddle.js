import { isTrue } from '.'

/**
 * Will return a pass if `actual` is greater than the comparer
 * @param actual
 */
const isGreaterThan = <T = any>(actual: T, comparer: T) => {
  isTrue(actual > comparer)
}

export default isGreaterThan
