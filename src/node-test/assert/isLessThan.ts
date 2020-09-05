import isTrue from './isTrue'

/**
 * Will return a pass if `actual` is less than the comparer
 * @param actual
 */
const isLessThan = <T = any>(actual: T, comparer: T) => {
  isTrue(actual < comparer)
}

export default isLessThan
