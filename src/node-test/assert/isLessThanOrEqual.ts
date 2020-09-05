import isTrue from './isTrue'

/**
 * Will return a pass if `actual` is less than or equal to the comparer
 * @param actual
 */
const isLessThanOrEqual = <T = any>(actual: T, comparer: T) => {
  isTrue(actual <= comparer)
}

export default isLessThanOrEqual
