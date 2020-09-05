import isTrue from './isTrue'

/**
 * Will return a pass if `actual` is greater than or equal to comparer
 * @param actual
 */
const isGreaterThanOrEqual = <T = any>(actual: T, comparer: T) => {
  isTrue(actual >= comparer)
}

export default isGreaterThanOrEqual
